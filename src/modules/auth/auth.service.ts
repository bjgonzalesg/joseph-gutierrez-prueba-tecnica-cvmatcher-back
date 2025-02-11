import { CREDENTIALS_INVALID_MESSAGE, USER_REPOSITORY } from '@/core/constants';
import { User } from '@/modules/users';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Role } from '../roles/role.entity';
import { AuthResponseDto, LoginDto, UserAuthDto } from './dto';
import { Payload } from './interfaces';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
  ) {}

  login(user: UserAuthDto): AuthResponseDto {
    const token = this.generateToken({
      id: user.id,
      username: user.username,
      role: user.role.name,
    });

    return { user, token };
  }

  //* Local Strategy (login)
  async validateUser(loginDto: LoginDto): Promise<UserAuthDto> {
    const { username } = loginDto;

    const user = await this.findOneUser(username);

    if (!user) throw new UnauthorizedException(CREDENTIALS_INVALID_MESSAGE);

    const match = await this.comparePassword(loginDto.password, user.password);

    if (!match) throw new UnauthorizedException(CREDENTIALS_INVALID_MESSAGE);

    const { password, ...rest } = user.dataValues;

    return rest as UserAuthDto;
  }

  async findOneUser(username: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { username },
      include: [Role],
    });

    return user;
  }

  private generateToken(payload: Payload): string {
    const token = this.jwtService.sign(payload);
    return token;
  }

  private async comparePassword(
    usu_password: string,
    usu_pass_db: string,
  ): Promise<boolean> {
    const match = await bcrypt.compare(usu_password, usu_pass_db);
    return match;
  }
}
