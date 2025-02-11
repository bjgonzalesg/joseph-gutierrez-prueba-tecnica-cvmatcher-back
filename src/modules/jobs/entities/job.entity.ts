import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  schema: 'jobs',
  tableName: 'jobs',
  timestamps: true,
  paranoid: true,
})
export class Job extends Model<Job> {
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
  title: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  enterprise: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  location: string;

  @ApiProperty()
  @Column({
    type: DataType.DATE,
  })
  publishedAt: Date;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
  })
  description: string;
}
