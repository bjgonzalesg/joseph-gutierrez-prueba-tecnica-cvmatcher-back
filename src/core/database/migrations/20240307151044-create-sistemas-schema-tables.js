'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const schema = 'sistemas';

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

        password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        role_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'roles',
            key: 'id',
          },
        },
      },
    );
  },

  async down(queryInterface) {
    const schema = 'sistemas';

    // Eliminar la tabla "usuarios"
    await queryInterface.dropTable({ schema, tableName: 'usuarios' });

    // Eliminar la tabla "roles"
    await queryInterface.dropTable({ schema, tableName: 'roles' });
  },
};
