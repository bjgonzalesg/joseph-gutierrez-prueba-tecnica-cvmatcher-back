import { Module } from '@nestjs/common';
import { rolesProviders } from './providers';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { CacheModule } from '@nestjs/cache-manager';
import { envs } from '@/core/config';

@Module({
  controllers: [RoleController],
  providers: [RoleService, ...rolesProviders],
  imports: [
    CacheModule.register({
      ttl: envs.cacheTtlDefault,
      max: envs.cacheMaxItemsDefault,
    }),
  ],
})
export class RoleModule {}
