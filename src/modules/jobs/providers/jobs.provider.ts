import { JOB_REPOSITORY } from '@/core/constants';
import { Provider } from '@nestjs/common';
import { Job } from '../entities/job.entity';

export const jobsProviders: Provider[] = [
  {
    provide: JOB_REPOSITORY,
    useValue: Job,
  },
];
