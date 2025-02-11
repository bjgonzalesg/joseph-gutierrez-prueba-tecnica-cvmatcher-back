import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth, GetUser } from '../auth/decorators';
import { Role } from '../auth/enums/role.enum';
import { User } from '../users';
import { JobsService } from './jobs.service';

@Controller('jobs')
@ApiTags('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Auth(Role.USER, Role.PRO, Role.ADMIN)
  @Get('/find-all')
  findAll(@GetUser() user: User) {
    return this.jobsService.findAll(user);
  }
}
