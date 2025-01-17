import { NodemailerModule } from '@/common/nodemailer/nodemailer.module';
import { envs } from '@/core/config';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserCodeProviders } from '../user-codes';
import { usersProviders } from '../users/providers';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { peopleProviders } from '../people/providers';

@Module({
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
    GoogleStrategy,
    ...usersProviders,
    ...UserCodeProviders,
    ...peopleProviders,
  ],
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: envs.jwtKey,
      signOptions: {
        expiresIn: envs.jwtExpiration,
      },
    }),
    NodemailerModule,
  ],
  exports: [AuthModule, JwtModule],
})
export class AuthModule {}
