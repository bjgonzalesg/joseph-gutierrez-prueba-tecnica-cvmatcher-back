import { PERSON_REPOSITORY } from '@/core/constants';
import { Inject, Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { Person } from './entities/person.entity';

@Injectable()
export class PeopleService {
  constructor(
    @Inject(PERSON_REPOSITORY)
    private readonly personRepository: typeof Person,
  ) {}

  create(createPersonDto: CreatePersonDto) {
    return 'This action adds a new person';
  }

  findAll() {
    return `This action returns all people`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  async changeStatus(id: number): Promise<void> {
    const person = await this.personRepository.findOne({
      where: { id: id },
      paranoid: false,
    });

    if (person.deletedAt) await person.restore();
    else await person.destroy();
  }
}
