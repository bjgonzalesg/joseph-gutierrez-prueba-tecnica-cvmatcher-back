import { ROLE_REPOSITORY } from '@/core/constants';
import { Provider } from '@nestjs/common';
import { Role } from './role.entity';

export const rolesProviders: Provider[] = [
  {
    provide: ROLE_REPOSITORY,
    useValue: Role,
  },
];
