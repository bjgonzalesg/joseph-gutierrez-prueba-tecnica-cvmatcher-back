import { EApiMethods, EApiRoutes } from '@/common/enums';
import { Body, Controller, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Auth, GetUser } from 'src/modules/auth/decorators';
import { ERoles } from 'src/modules/auth/enums';
import { UserDB } from '../users/dto';
import { CreatePersonDto, UpdatePersonDto } from './dto';
import { Person } from './entities/person.entity';
import { PeopleService } from './people.service';

@Controller(EApiRoutes.PEOPLE)
@ApiTags(EApiRoutes.PEOPLE)
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post(EApiMethods.CREATE)
  @ApiCreatedResponse({ type: Person })
  @Auth(ERoles.ADMIN)
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.peopleService.create(createPersonDto);
  }

  @Patch(EApiMethods.UPDATE)
  @Auth()
  @ApiOkResponse({ type: Person })
  update(@GetUser() user: UserDB, @Body() updatePersonDto: UpdatePersonDto) {
    return this.peopleService.update(user, updatePersonDto);
  }
}
