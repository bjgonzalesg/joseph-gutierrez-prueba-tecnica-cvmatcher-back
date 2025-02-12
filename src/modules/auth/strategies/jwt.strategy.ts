import { envs } from 'src//core/config';
import { USER_NOT_AUTHORIZED_MESSAGE } from 'src//core/constants';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { Payload } from '../interfaces';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: envs.jwtKey,
    });
  }

  async validate(payload: Payload) {
    const { username } = payload;

    const user = await this.authService.findOneUser(username);

    if (!user) throw new UnauthorizedException(USER_NOT_AUTHORIZED_MESSAGE);
    if (!!user.deletedAt)
      throw new UnauthorizedException(USER_NOT_AUTHORIZED_MESSAGE);

    const { password, ...rest } = user.dataValues;

    return rest;
  }
}
