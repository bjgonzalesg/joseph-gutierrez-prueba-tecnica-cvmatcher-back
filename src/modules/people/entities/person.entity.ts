import { DocumentType } from '@/modules/document-type/document-type.entity';
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
  tableName: 'personas',
  timestamps: true,
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
  apellido_paterno: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  apellido_materno: string;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nombres: string;

  @ApiProperty()
  @ForeignKey(() => DocumentType)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  documento_tipo_id: number;

  @ApiProperty()
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  documento: string;

  @BelongsTo(() => DocumentType)
  documento_tipo: DocumentType;
}
