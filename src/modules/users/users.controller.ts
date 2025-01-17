import { QueryFindAllByFilterPaginated } from '@/common/dtos';
import { EApiMethods, EApiRoutes } from '@/common/enums';
import { ResponsePaginationDto } from '@/common/pagination/dtos';
import { ParseIdPipe } from '@/common/pipes/parse-id.pipe';
import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto';
import { UsersService } from './users.service';

@Controller(EApiRoutes.USERS)
@ApiTags(EApiRoutes.USERS)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(EApiMethods.FIND_ALL_BY_FILTER_PAGINATED)
  @ApiOkResponse({ type: ResponsePaginationDto })
  findAllByFilterPaginated(@Query() query: QueryFindAllByFilterPaginated) {
    return this.usersService.findAllByFilterPaginated(query);
  }

  @Get('find-no-registered-by-document/:document')
  findNoRegisteredByDocument(@Param('document') document: string) {
    return this.usersService.findNoRegisteredByDocument(document);
  }

  @Patch(EApiMethods.UPDATE)
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Patch(EApiMethods.CHANGE_STATUS)
  changeStatus(@Param('id', ParseIdPipe) userId: number) {
    return this.usersService.changeStatus(userId);
  }
}
