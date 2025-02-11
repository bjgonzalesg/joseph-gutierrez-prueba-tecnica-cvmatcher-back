import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { JobsController } from './jobs.controller';
import { JobsService } from './jobs.service';
import { jobsProviders } from './providers/jobs.provider';

@Module({
  controllers: [JobsController],
  providers: [JobsService, ...jobsProviders],
  imports: [AuthModule],
})
export class JobsModule {}
