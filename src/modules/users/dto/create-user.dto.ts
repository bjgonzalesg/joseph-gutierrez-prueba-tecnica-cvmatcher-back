import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsInt, IsNotEmpty, IsPositive } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  documento: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @IsPositive()
  rol_id: number;
}
