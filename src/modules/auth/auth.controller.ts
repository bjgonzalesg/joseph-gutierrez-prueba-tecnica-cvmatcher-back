import { Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../users';
import { AuthService } from './auth.service';
import { GetUser } from './decorators/get-user.decorator';
import { UserAuthDto } from './dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiBody({ type: UserAuthDto })
  @ApiOkResponse({ type: User, status: 200 })
  @UseGuards(AuthGuard('local'))
  login(@GetUser() user: UserAuthDto) {
    return this.authService.login(user);
  }
}
