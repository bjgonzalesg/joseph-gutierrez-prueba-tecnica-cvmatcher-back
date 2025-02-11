import { Role } from '@/modules/roles/role.entity';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UserAuthDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty({ type: Role })
  role: Role;
}
