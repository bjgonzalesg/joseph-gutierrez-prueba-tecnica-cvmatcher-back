'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const schema = 'boletaspago';

    const id = {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    };

    const timestamp = {
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },

      deletedAt: {
        type: Sequelize.DataTypes.DATE,
      },
    };

    // * Crear tabla condiciones
    await queryInterface.createTable(
      { schema, tableName: 'condiciones' },
      {
        id,

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        ...timestamp,
      },
    );

    // * Crear tabla situaciones
    await queryInterface.createTable(
      { schema, tableName: 'situaciones' },
      {
        id,

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        ...timestamp,
      },
    );

    // * Crear tabla niveles_remuneracion
    await queryInterface.createTable(
      { schema, tableName: 'niveles_remuneracion' },
      {
        id,

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        ...timestamp,
      },
    );

    // * Crear tabla cargos
    await queryInterface.createTable(
      { schema, tableName: 'cargos' },
      {
        id,

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        ...timestamp,
      },
    );

    // * Crear tabla regimen_laboral_leyes
    await queryInterface.createTable(
      { schema, tableName: 'regimen_laboral_leyes' },
      {
        id,

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        descripcion: {
          type: Sequelize.DataTypes.STRING,
        },

        ...timestamp,
      },
    );

    // * Crear tabla regimen_laboral_estados
    await queryInterface.createTable(
      { schema, tableName: 'regimen_laboral_estados' },
      {
        id,

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        ...timestamp,
      },
    );

    // * Crear tabla regimenes_laborales
    await queryInterface.createTable(
      { schema, tableName: 'regimenes_laborales' },
      {
        id,

        ley_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: { schema, tableName: 'regimen_laboral_leyes' },
            key: 'id',
          },
        },

        estado_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: { schema, tableName: 'regimen_laboral_estados' },
            key: 'id',
          },
        },

        ...timestamp,
      },
    );

    // * Crear tabla regimen_pensionario_leyes
    await queryInterface.createTable(
      { schema, tableName: 'regimen_pensionario_leyes' },
      {
        id,

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        descripcion: {
          type: Sequelize.DataTypes.STRING,
        },

        ...timestamp,
      },
    );

    // * Crear tabla regimen_pensionario_tipos
    await queryInterface.createTable(
      { schema, tableName: 'regimen_pensionario_tipos' },
      {
        id,

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        ...timestamp,
      },
    );

    // * Crear tabla regimenes_pensionarios
    await queryInterface.createTable(
      { schema, tableName: 'regimenes_pensionarios' },
      {
        id,

        ley_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: { schema, tableName: 'regimen_pensionario_leyes' },
            key: 'id',
          },
        },

        tipo_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: { schema, tableName: 'regimen_pensionario_tipos' },
            key: 'id',
          },
        },

        ...timestamp,
      },
    );

    // * Crear tabla estados_laborales
    await queryInterface.createTable(
      { schema, tableName: 'estados_laborales' },
      {
        id,

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        ...timestamp,
      },
    );

    // * Crear tabla trabajadores
    await queryInterface.createTable(
      { schema, tableName: 'trabajadores' },
      {
        id,

        persona_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: { schema: 'sistemas', tableName: 'personas' },
            key: 'id',
          },
        },

        codigo: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        condicion_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'condiciones' },
            key: 'id',
          },
        },

        situacion_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'situaciones' },
            key: 'id',
          },
        },

        nivel_remuneracion_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'niveles_remuneracion' },
            key: 'id',
          },
        },

        cargo_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'cargos' },
            key: 'id',
          },
        },

        fecha_ingreso: {
          type: Sequelize.DataTypes.DATEONLY,
          allowNull: false,
        },

        regimen_laboral_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'regimenes_laborales' },
            key: 'id',
          },
        },

        regimen_pensionario_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'regimenes_pensionarios' },
            key: 'id',
          },
        },

        cuspp: {
          type: Sequelize.DataTypes.STRING,
        },

        estado_laboral_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'estados_laborales' },
            key: 'id',
          },
        },

        anio: {
          type: Sequelize.DataTypes.STRING(4),
          allowNull: false,
        },

        mes: {
          type: Sequelize.DataTypes.STRING(2),
          allowNull: false,
        },

        ...timestamp,
      },
    );

    // * Crear tabla boletas_pago_tipos
    await queryInterface.createTable(
      { schema, tableName: 'boletas_pago_tipos' },
      {
        id,

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        ...timestamp,
      },
    );

    // * Crear tabla boletas_pago
    await queryInterface.createTable(
      { schema, tableName: 'boletas_pago' },
      {
        id,

        trabajador_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'trabajadores' },
            key: 'id',
          },
        },

        tipo_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'boletas_pago_tipos' },
            key: 'id',
          },
        },

        ...timestamp,
      },
    );

    // * Crea tabla aporte_tipos
    await queryInterface.createTable(
      { schema, tableName: 'aporte_tipos' },
      {
        id,

        codigo: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        ...timestamp,
      },
    );

    // * Crea tabla aportes
    await queryInterface.createTable(
      { schema, tableName: 'aportes' },
      {
        id,

        boleta_pago_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'boletas_pago' },
            key: 'id',
          },
        },

        tipo_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'aporte_tipos' },
            key: 'id',
          },
        },

        monto: {
          type: Sequelize.DataTypes.DECIMAL,
          allowNull: false,
        },

        ...timestamp,
      },
    );

    // * Crea tabla haber_tipos
    await queryInterface.createTable(
      { schema, tableName: 'haber_tipos' },
      {
        id,

        codigo: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        ...timestamp,
      },
    );

    // * Crea tabla haberes
    await queryInterface.createTable(
      { schema, tableName: 'haberes' },
      {
        id,

        boleta_pago_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'boletas_pago' },
            key: 'id',
          },
        },

        tipo_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'haber_tipos' },
            key: 'id',
          },
        },

        monto: {
          type: Sequelize.DataTypes.DECIMAL,
          allowNull: false,
        },

        ...timestamp,
      },
    );

    // * Crea tabla descuento_tipos
    await queryInterface.createTable(
      { schema, tableName: 'descuento_tipos' },
      {
        id,

        codigo: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        ...timestamp,
      },
    );

    // * Crea tabla descuentos
    await queryInterface.createTable(
      { schema, tableName: 'descuentos' },
      {
        id,

        boleta_pago_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'boletas_pago' },
            key: 'id',
          },
        },

        tipo_id: {
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: { schema, tableName: 'descuento_tipos' },
            key: 'id',
          },
        },

        monto: {
          type: Sequelize.DataTypes.DECIMAL,
          allowNull: false,
        },

        ...timestamp,
      },
    );
  },

  async down(queryInterface) {
    const schema = 'boletaspago';

    await queryInterface.dropTable({ schema, tableName: 'descuentos' });
    await queryInterface.dropTable({ schema, tableName: 'descuento_tipos' });
    await queryInterface.dropTable({ schema, tableName: 'haberes' });
    await queryInterface.dropTable({ schema, tableName: 'haber_tipos' });
    await queryInterface.dropTable({ schema, tableName: 'aportes' });
    await queryInterface.dropTable({ schema, tableName: 'aporte_tipos' });
    await queryInterface.dropTable({ schema, tableName: 'boletas_pago' });
    await queryInterface.dropTable({ schema, tableName: 'boletas_pago_tipos' });
    await queryInterface.dropTable({ schema, tableName: 'trabajadores' });
    await queryInterface.dropTable({ schema, tableName: 'estados_laborales' });
    await queryInterface.dropTable({
      schema,
      tableName: 'regimenes_pensionarios',
    });
    await queryInterface.dropTable({
      schema,
      tableName: 'regimen_pensionario_tipos',
    });
    await queryInterface.dropTable({
      schema,
      tableName: 'regimen_pensionario_leyes',
    });
    await queryInterface.dropTable({
      schema,
      tableName: 'regimenes_laborales',
    });
    await queryInterface.dropTable({
      schema,
      tableName: 'regimen_laboral_estados',
    });
    await queryInterface.dropTable({
      schema,
      tableName: 'regimen_laboral_leyes',
    });
    await queryInterface.dropTable({ schema, tableName: 'cargos' });
    await queryInterface.dropTable({
      schema,
      tableName: 'niveles_remuneracion',
    });
    await queryInterface.dropTable({ schema, tableName: 'situaciones' });
    await queryInterface.dropTable({ schema, tableName: 'condiciones' });
  },
};
