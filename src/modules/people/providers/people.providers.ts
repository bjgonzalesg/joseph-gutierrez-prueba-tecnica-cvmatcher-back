import { PERSON_REPOSITORY } from '@/core/constants';
import { Provider } from '@nestjs/common';
import { Person } from '../entities/person.entity';

export const peopleProviders: Provider[] = [
  { provide: PERSON_REPOSITORY, useValue: Person },
];
