import { SetMetadata } from '@nestjs/common';
import { Role } from '../enums/role.enum';
import { ROLES_KEY } from './../../../core/constants/index';

export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);
