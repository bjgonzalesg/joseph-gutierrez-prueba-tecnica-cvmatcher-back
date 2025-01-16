import { Module } from '@nestjs/common';
import { PaginationModule } from './common/pagination';
import { DatabaseModule } from './core/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { PeopleModule } from './modules/people/people.module';
import { UsersModule } from './modules/users/users.module';
import { RoleModule } from './modules/roles/role.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    PeopleModule,
    PaginationModule,
    RoleModule,
  ],
})
export class AppModule {}
