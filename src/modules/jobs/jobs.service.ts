import { JOB_REPOSITORY } from '@/core/constants';
import { Inject, Injectable } from '@nestjs/common';
import { Role } from '../auth/enums/role.enum';
import { User } from '../users';
import { Job } from './entities/job.entity';

@Injectable()
export class JobsService {
  constructor(
    @Inject(JOB_REPOSITORY) private readonly jobRepository: typeof Job,
  ) {}

  async findAll(user: User): Promise<Partial<Job>[]> {
    const jobs = await this.jobRepository.findAll();

    switch (user.role.name) {
      case Role.USER:
        return jobs.map((job) => ({ title: job.title }));

      case Role.PRO:
        return jobs.map((job) => ({
          title: job.title,
          description: job.description,
        }));

      case Role.ADMIN:
        return jobs;
    }
  }
}
