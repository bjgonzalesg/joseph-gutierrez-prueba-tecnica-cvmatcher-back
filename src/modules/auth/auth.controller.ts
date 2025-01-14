import { EApiRoutes } from '@/common/enums';
import { CreateUserDto } from '@/modules/users/dto';
import {
  Body,
  Controller,
  Get,
  Patch,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { Auth } from './decorators';
import { GetUser } from './decorators/get-user.decorator';
import { AuthResponseDto, ChangePasswordDto, UserAuthDto } from './dto';
import { LoginDto } from './dto/login.dto';
import { GoogleAuthGuard } from './guards';
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

  @Get('validate-token')
  validateToken(@Query('token') token: string) {
    return this.authService.validateToken(token);
  }

  @Patch('change-password')
  @Auth()
  changePassword(
    @GetUser() user: Payload,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    return this.authService.changePassword(user, changePasswordDto);
  }

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  googleLogin() {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  googleCallback(@Req() req: Request, @Res() res: Response) {
    const userAuth = this.authService.login(req.user as UserAuthDto);
    const token = userAuth.token;

    return res.redirect(
      `${process.env.FRONTEND_URL}/api/auth/google?token=${token}`,
    );
  }
}
