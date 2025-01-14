import { ApiProperty } from '@nestjs/swagger';

export class UserAuthDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  surnames: string;

  @ApiProperty()
  names: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  allowedPaths: string[];

  @ApiProperty()
  status: boolean;
}
