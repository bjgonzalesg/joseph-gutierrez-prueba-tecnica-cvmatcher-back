import { ApiProperty } from '@nestjs/swagger';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ECodeTypes } from '../auth/enums';

@Table({
  schema: 'sistemas',
  tableName: 'usuario_codigos',
  timestamps: true,
  paranoid: true,
})
export class UserCode extends Model<UserCode> {
  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty()
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  usuario_id: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  codigo: string;

  @ApiProperty()
  @Column({
    type: DataType.ENUM(ECodeTypes.REQUEST_RECOVER_PASSWORD),
    allowNull: false,
  })
  codigo_tipo: ECodeTypes;

  @ApiProperty()
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  fecha_expiracion: Date;
}
