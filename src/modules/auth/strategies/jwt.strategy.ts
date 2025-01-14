import { envs } from '@/core/config';
import {
  ROLE_NOT_AUTHORIZED_MESSAGE,
  USER_NOT_AUTHORIZED_MESSAGE,
  USER_REPOSITORY,
} from '@/core/constants';
import { User } from '@/modules/users/entities';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { QueryTypes } from 'sequelize';
import { UserAuthDto } from '../dto';
import { Payload } from '../interfaces';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: envs.jwtKey,
    });
  }

  async validate(payload: Payload): Promise<UserAuthDto> {
    const { username } = payload;

    const [user] = (await this.userRepository.sequelize.query(
      'SELECT * FROM sistemas.fn_get_user_by_username(?);',
      {
        type: QueryTypes.SELECT,
        replacements: [username],
      },
    )) as [UserAuthDto];

    if (!user) throw new UnauthorizedException(ROLE_NOT_AUTHORIZED_MESSAGE);

    if (!user.status)
      throw new UnauthorizedException(USER_NOT_AUTHORIZED_MESSAGE);

    return user;
  }
}
