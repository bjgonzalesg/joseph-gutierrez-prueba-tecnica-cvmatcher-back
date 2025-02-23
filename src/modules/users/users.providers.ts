import { USER_REPOSITORY } from 'src//core/constants';
import { Provider } from '@nestjs/common';
import { User } from './user.entity';

export const usersProviders: Provider[] = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
