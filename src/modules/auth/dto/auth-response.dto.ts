import { ApiProperty } from '@nestjs/swagger';
import { UserAuthDto } from './user-auth.dto';

export class AuthResponseDto {
  @ApiProperty({ type: UserAuthDto })
  user: UserAuthDto;

  @ApiProperty()
  token: string;
}
