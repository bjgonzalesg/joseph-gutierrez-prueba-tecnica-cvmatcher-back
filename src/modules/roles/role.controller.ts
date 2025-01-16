import { EApiMethods, EApiRoutes } from '@/common/enums';
import { FIND_ALL_ROLES_CK } from '@/core/constants';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';
import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RoleService } from './role.service';

@Controller(EApiRoutes.ROLES)
@ApiTags(EApiRoutes.ROLES)
@UseInterceptors(CacheInterceptor)
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get(EApiMethods.FIND_ALL)
  @CacheKey(FIND_ALL_ROLES_CK)
  async findAll() {
    return await this.roleService.findAll();
  }
}
