import { EApiRoutes } from '@/common/enums';
import { CreateUserDto } from '@/modules/users/dto';
import { Body, Controller, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Auth } from './decorators';
import { GetUser } from './decorators/get-user.decorator';
import { AuthResponseDto, ChangePasswordDto, UserAuthDto } from './dto';
import { LoginDto } from './dto/login.dto';
import { Payload } from './interfaces';

@Controller(EApiRoutes.AUTH)
@ApiTags(EApiRoutes.AUTH)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: LoginDto })
  @ApiOkResponse({ type: AuthResponseDto })
  @UseGuards(AuthGuard('local'))
  login(@GetUser() user: UserAuthDto) {
    return this.authService.login(user);
  }

  @Post('signup')
  @ApiOkResponse({ type: AuthResponseDto })
  singUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.singUp(createUserDto);
  }

  @Patch('change-password')
  @Auth()
  changePassword(
    @GetUser() user: Payload,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    return this.authService.changePassword(user, changePasswordDto);
  }
}
