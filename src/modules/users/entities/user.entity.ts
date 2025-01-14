import { Person } from '@/modules/people/entities/person.entity';
import { Role } from '@/modules/roles';
import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

@Table({
  schema: 'sistemas',
  tableName: 'usuarios',
  timestamps: true,
  paranoid: true,
})
export class User extends Model<User> {
  @ApiProperty()
  @Column({
    type: DataType.NUMBER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  username: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  password: string;

  @ApiProperty()
  @ForeignKey(() => Person)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,
  })
  persona_id: number;

  @ApiProperty()
  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  rol_id: number;

  @BelongsTo(() => Person)
  person: Person;

  @BelongsTo(() => Role)
  role: Role;
}
