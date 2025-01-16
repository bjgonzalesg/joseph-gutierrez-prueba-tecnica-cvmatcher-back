import { ROLE_REPOSITORY } from '@/core/constants';
import { Inject, Injectable } from '@nestjs/common';
import { Role } from './entities';

@Injectable()
export class RoleService {
  constructor(
    @Inject(ROLE_REPOSITORY)
    private readonly roleRepository: typeof Role,
  ) {}

  async findAll() {
    return await this.roleRepository.findAll();
  }
}
