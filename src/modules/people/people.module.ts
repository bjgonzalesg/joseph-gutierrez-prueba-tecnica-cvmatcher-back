import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { peopleProviders } from './providers';

@Module({
  controllers: [PeopleController],
  providers: [PeopleService, ...peopleProviders],
})
export class PeopleModule {}
