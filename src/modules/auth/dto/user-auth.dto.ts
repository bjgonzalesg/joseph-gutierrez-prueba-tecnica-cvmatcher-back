import { Role } from 'src//modules/roles/role.entity';
import { ApiProperty } from '@nestjs/swagger';

export class UserAuthDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty({ type: Role })
  role: Role;
}
