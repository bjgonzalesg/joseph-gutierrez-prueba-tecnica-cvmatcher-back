import { EApiMethods, EApiRoutes } from '@/common/enums';
import { ParseIdPipe } from '@/common/pipes/parse-id.pipe';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PeopleService } from './people.service';

@Controller(EApiRoutes.PEOPLE)
@ApiTags(EApiRoutes.PEOPLE)
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post(EApiMethods.CREATE)
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.peopleService.create(createPersonDto);
  }

  @Get(EApiMethods.FIND_ALL_BY_FILTER_PAGINATED)
  findAll() {
    return this.peopleService.findAll();
  }

  @Patch(EApiMethods.UPDATE)
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.peopleService.update(+id, updatePersonDto);
  }

  @Patch(EApiMethods.CHANGE_STATUS)
  changeStatus(@Param('id', ParseIdPipe) id: number) {
    return this.peopleService.changeStatus(id);
  }
}
