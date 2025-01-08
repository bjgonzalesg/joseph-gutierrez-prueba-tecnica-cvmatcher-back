import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  schema: 'sistemas',
  tableName: 'people',
  paranoid: true,
})
export class Person extends Model<Person> {
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  surnames: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  names: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  document: string;

  @ApiPropertyOptional()
  @Column({
    type: DataType.STRING,
  })
  nacionality?: string;

  @ApiPropertyOptional()
  @Column({
    type: DataType.STRING,
  })
  telephone?: string;

  @ApiPropertyOptional()
  @Column({
    type: DataType.STRING,
  })
  gender?: string;

  @ApiPropertyOptional()
  @Column({
    type: DataType.DATE,
  })
  date?: Date;

  @ApiPropertyOptional()
  @Column({
    type: DataType.STRING,
  })
  address?: string;
}
