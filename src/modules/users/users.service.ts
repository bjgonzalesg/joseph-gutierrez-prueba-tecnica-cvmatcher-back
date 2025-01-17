import { QueryFindAllByFilterPaginated } from '@/common/dtos';
import { EApiMethods, EApiRoutes } from '@/common/enums';
import { PaginationService } from '@/common/pagination';
import { USER_REPOSITORY, USERS_NOT_FOUND_MESSAGE } from '@/core/constants';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Op, QueryTypes, WhereOptions } from 'sequelize';
import { UpdateUserDto } from './dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly paginationService: PaginationService,
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  async findAllByFilterPaginated(
    query: QueryFindAllByFilterPaginated,
  ): Promise<any> {
    const { filter, ...rest } = query;

    const whereOptions: WhereOptions = filter
      ? {
          username: { [Op.iLike]: `%${filter}%` },
        }
      : null;

    const { limit, offset } = this.paginationService.generate(rest);

    const { count, rows } = await this.userRepository.findAndCountAll({
      where: whereOptions,
      attributes: { exclude: ['password'] },
      include: [{ all: true }],
      limit,
      offset,
      paranoid: false,
      order: [['createdAt', 'DESC']],
    });

    if (!rows) throw new NotFoundException(USERS_NOT_FOUND_MESSAGE);

    return this.paginationService.paginate({
      total: count,
      apiMethod: EApiMethods.FIND_ALL_PAGINATED,
      apiRoute: EApiRoutes.USERS,
      limit: rest.limit,
      page: rest.page,
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
