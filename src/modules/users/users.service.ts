import { EApiMethods, EApiRoutes } from '@/common/enums';
import { CreatePaginationDto, PaginationService } from '@/common/pagination';
import { USER_REPOSITORY, USERS_NOT_FOUND_MESSAGE } from '@/core/constants';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto';
import { User } from './entities/user.entity';
import { QueryTypes } from 'sequelize';

@Injectable()
export class UsersService {
  constructor(
    private readonly paginationService: PaginationService,
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async findAllPaginate(
    createPaginationDto?: CreatePaginationDto,
  ): Promise<any> {
    const { limit, offset } =
      this.paginationService.generate(createPaginationDto);

    const { count, rows } = await this.userRepository.findAndCountAll({
      attributes: { exclude: ['password'] },
      include: [{ all: true }],
      limit,
      offset,
      paranoid: false,
      order: [['id', 'ASC']],
    });

    if (!rows) throw new NotFoundException(USERS_NOT_FOUND_MESSAGE);

    return this.paginationService.paginate({
      total: count,
      page: createPaginationDto.page,
      apiMethod: EApiMethods.FIND_ALL_PAGINATED,
      apiRoute: EApiRoutes.USERS,
      limit,
      rows,
    });
  }

  async findNoRegisteredByDocument(document: string): Promise<User> {
    const [user] = (await this.userRepository.sequelize.query(
      'SELECT * FROM sistemas.fn_get_persona_no_registrada_por_documento(?);',
      {
        type: QueryTypes.SELECT,
        replacements: [document],
      },
    )) as [User];

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findByPk(id);

    await user.update(updateUserDto);

    return await user.reload({ include: { all: true } });
  }

  async changeStatus(userId: number): Promise<void> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      paranoid: false,
    });

    if (user.deletedAt) await user.restore();
    else await user.destroy();
  }
}
