import { Provider } from '@nestjs/common';
import { USER_CODE_REPOSITORY } from 'src/core/constants';
import { UserCode } from './user-codes.entity';

export const UserCodeProviders: Provider[] = [
  {
    provide: USER_CODE_REPOSITORY,
    useValue: UserCode,
  },
];
