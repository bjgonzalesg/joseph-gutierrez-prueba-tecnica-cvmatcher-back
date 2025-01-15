'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const schema = 'sistemas';

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

    //* Crear la tabla "documento_tipos"
    await queryInterface.createTable(
      {
        schema,
        tableName: 'documento_tipos',
      },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        abreviatura: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },
        ...timestamp,
      },
    );

    //* Create "personas" table
    await queryInterface.createTable(
      {
        schema,
        tableName: 'personas',
      },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        apellido_paterno: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        apellido_materno: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        nombres: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        documento_tipo_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: { schema, tableName: 'documento_tipos' },
            key: 'id',
          },
        },

        documento: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        ...timestamp,
      },
    );

    //* Crear la tabla "roles"
    await queryInterface.createTable(
      {
        schema,
        tableName: 'roles',
      },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        ...timestamp,
      },
    );

    //* Crear la tabla "usuarios"
    await queryInterface.createTable(
      {
        schema,
        tableName: 'usuarios',
      },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        username: {
          type: Sequelize.DataTypes.STRING,
          unique: true,
          allowNull: false,
        },

        email: {
          type: Sequelize.DataTypes.STRING,
          unique: true,
          allowNull: false,
        },

        password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        avatar_url: {
          type: Sequelize.DataTypes.STRING,
        },

        persona_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          references: {
            model: { schema, tableName: 'personas' },
            key: 'id',
          },
        },

        rol_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'roles',
            key: 'id',
          },
        },

        ...timestamp,
      },
    );

    //* Create "paginas" table
    await queryInterface.createTable(
      {
        schema,
        tableName: 'paginas',
      },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        descripcion: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        ruta: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        icono: {
          type: Sequelize.DataTypes.STRING,
        },

        ...timestamp,
      },
    );

    //* Create "roles_paginas" table
    await queryInterface.createTable(
      {
        schema,
        tableName: 'roles_paginas',
      },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        rol_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: { schema, tableName: 'roles' },
            key: 'id',
          },
        },

        pagina_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: { schema, tableName: 'paginas' },
            key: 'id',
          },
        },

        ...timestamp,
      },
    );

    //* Crear la tabla "usuario_codigos"
    await queryInterface.createTable(
      {
        schema,
        tableName: 'usuario_codigos',
      },
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        usuario_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: { schema, tableName: 'usuarios' },
            key: 'id',
          },
        },
        codigo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        codigo_tipo: {
          type: Sequelize.ENUM('SOLICITUD_CAMBIO_CONTRASENA'),
          allowNull: false,
        },
        fecha_expiracion: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        ...timestamp,
      },
    );
  },

  async down(queryInterface) {
    const schema = 'sistemas';

    // Eliminar la tabla "roles_paginas"
    await queryInterface.dropTable({ schema, tableName: 'roles_paginas' });

    // Eliminar la tabla "paginas"
    await queryInterface.dropTable({ schema, tableName: 'paginas' });

    // Eliminar la tabla "usuarios"
    await queryInterface.dropTable({ schema, tableName: 'usuarios' });

    // Eliminar la tabla "roles"
    await queryInterface.dropTable({ schema, tableName: 'roles' });

    // Eliminar la tabla "personas"
    await queryInterface.dropTable({ schema, tableName: 'personas' });

    // Eliminar la tabla "documento_tipos"
    await queryInterface.dropTable({ schema, tableName: 'documento_tipos' });

    // Eliminar la tabla "usuario_codigos"
    await queryInterface.dropTable({ schema, tableName: 'usuario_codigos' });
  },
};
