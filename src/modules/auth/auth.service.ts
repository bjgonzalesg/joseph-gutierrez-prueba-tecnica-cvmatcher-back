import { addMinutesToDate } from '@/common/helpers';
import { NodemailerService } from '@/common/nodemailer/nodemailer.service';
import { envs } from '@/core/config';
import {
  CODE_EXPIRED_MESSAGE,
  CODE_NOT_FOUND_MESSAGE,
  CREDENTIALS_INVALID_MESSAGE,
  MAIL_NOT_FOUND_MESSAGE,
  USER_ALREADY_EXISTS_MESSAGE,
  USER_CODE_REPOSITORY,
  USER_REPOSITORY,
} from '@/core/constants';
import { CreateUserDto } from '@/modules/users/dto';
import { User } from '@/modules/users/entities';
import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { QueryTypes } from 'sequelize';
import { v4 } from 'uuid';
import { Role } from '../roles';
import { UserCode } from '../user-codes';
import {
  AuthResponseDto,
  ChangePasswordDto,
  GoogleAuthDto,
  LoginDto,
  RecoverPasswordDto,
  RequestRecoverPasswordDto,
  UserAuthDto,
} from './dto';
import { ECodeTypes } from './enums';
import { Payload } from './interfaces';

@Injectable()
export class AuthService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
    private readonly jwtService: JwtService,
    @Inject(USER_CODE_REPOSITORY)
    private readonly userCodeRepository: typeof UserCode,
    private readonly nodemailerService: NodemailerService,
  ) {}

  login(user: UserAuthDto): AuthResponseDto {
    const token = this.generateToken({
      id: user.id,
      username: user.username,
      role: user.role,
    });

    return { user, token };
  }

  async singUp(createUserDto: CreateUserDto): Promise<UserAuthDto> {
    const { username, password, persona_id, rol_id } = createUserDto;

    const verifyUser = await this.findOneUser(username);

    if (verifyUser)
      throw new UnauthorizedException(USER_ALREADY_EXISTS_MESSAGE);

    await this.userRepository.create({
      username,
      password: this.hashPassword(password),
      persona_id,
      rol_id,
    });

    const UserAuthDto = await this.findOneUserByUsername(username);

    return UserAuthDto;
  }

  async requestRecoverPassword(
    request: RequestRecoverPasswordDto,
  ): Promise<void> {
    const { email } = request;

    const user = await this.userRepository.findOne({
      where: { email: email },
    });

    if (!user) throw new UnauthorizedException(MAIL_NOT_FOUND_MESSAGE);

    const token: string = v4();

    const frontendUrl = envs.frontendUrl;

    await this.nodemailerService.sendMail({
      to: email,
      subject: 'Recuperar contraseña',
      html: `
        <div>
          <a href="${frontendUrl}/recover-password/${token}">Click aqui para recuperar tu contraseña</a>
          <p>Tiempo de expiracion: <b>${envs.codeExpirationInMinutes}</b> minutos</p>
        </div>`,
    });

    await this.userCodeRepository.create({
      usuario_id: user.id,
      codigo: token,
      codigo_tipo: ECodeTypes.REQUEST_RECOVER_PASSWORD,
      fecha_expiracion: addMinutesToDate(
        new Date(),
        envs.codeExpirationInMinutes,
      ),
    });
  }

  async recoverPassword(recoverPasswordDto: RecoverPasswordDto): Promise<void> {
    const { code, password } = recoverPasswordDto;

    const userCode = await this.userCodeRepository.findOne({
      where: { codigo: code },
    });

    if (!userCode) throw new UnauthorizedException(CODE_NOT_FOUND_MESSAGE);

    if (userCode.fecha_expiracion < new Date()) {
      await userCode.destroy();
      throw new UnauthorizedException(CODE_EXPIRED_MESSAGE);
    }

    const user = await this.userRepository.findByPk(userCode.usuario_id);

    const newPasswordHashed = this.hashPassword(password);

    user.password = newPasswordHashed;

    await user.save();
    await userCode.destroy();
  }

  async validateToken(token: string): Promise<AuthResponseDto> {
    try {
      const payload = this.jwtService.verify(token) as Payload;

      const userAuthDto = await this.findOneUserByUsername(payload.username);

      return this.login(userAuthDto);
    } catch (error) {
      throw new UnauthorizedException(CREDENTIALS_INVALID_MESSAGE);
    }
  }

  async changePassword(
    user: Payload,
    changePasswordDto: ChangePasswordDto,
  ): Promise<void> {
    const { current_password, new_password } = changePasswordDto;

    const usr = await this.findOneUser(user.username);

    const match = await this.comparePassword(current_password, usr.password);

    if (!match) throw new UnauthorizedException(CREDENTIALS_INVALID_MESSAGE);

    await usr.update({ password: this.hashPassword(new_password) });
  }

  //* Local Strategy (login)
  async validateUser(loginDto: LoginDto): Promise<UserAuthDto> {
    const { username } = loginDto;

    const user = await this.findOneUser(username);

    if (!user) throw new UnauthorizedException(CREDENTIALS_INVALID_MESSAGE);

    const match = await this.comparePassword(loginDto.password, user.password);

    if (!match) throw new UnauthorizedException(CREDENTIALS_INVALID_MESSAGE);

    return await this.findOneUserByUsername(username);
  }

  // * Google Strategy (login)
  async validateGoogleUser(googleUser: GoogleAuthDto) {
    const user = await this.userRepository.findOne({
      where: { email: googleUser.email },
      include: [Role],
    });

    if (!user) throw new UnauthorizedException(CREDENTIALS_INVALID_MESSAGE);

    if (user.avatar_url !== googleUser.avatarUrl) {
      await user.update({ avatar_url: googleUser.avatarUrl });
    }

    return user;
  }

  private async findOneUser(username: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { username },
    });

    return user;
  }

  private async findOneUserByUsername(username: string): Promise<UserAuthDto> {
    const [user] = (await this.userRepository.sequelize.query(
      'SELECT * FROM sistemas.fn_get_usuario_por_username(?)',
      {
        type: QueryTypes.SELECT,
        replacements: [username],
      },
    )) as [UserAuthDto];

    return user;
  }

  private generateToken(payload: Payload): string {
    const token = this.jwtService.sign(payload);
    return token;
  }

  private hashPassword(password: string): string {
    const hash: string = bcrypt.hashSync(password, 10);
    return hash;
  }

  private async comparePassword(
    usu_password: string,
    usu_pass_db: string,
  ): Promise<boolean> {
    const match = await bcrypt.compare(usu_password, usu_pass_db);
    return match;
  }
}
