import { EApiMethods, EApiRoutes } from '@/common/enums';
import { CreatePaginationDto, PaginationService } from '@/common/pagination';
import { USER_REPOSITORY, USERS_NOT_FOUND_MESSAGE } from '@/core/constants';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';

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

  async changeStatus(userId: number): Promise<void> {
    const user = await this.userRepository.findOne({
      where: { id: userId },
      paranoid: false,
    });

    if (user.deletedAt) await user.restore();
    else await user.destroy();
  }
}
