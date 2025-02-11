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

    // *Create "roles" table
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

        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        ...timestamp,
      },
    );

    // *Create "users" table
    await queryInterface.createTable(
      {
        schema,
        tableName: 'users',
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

        ...timestamp,
      },
    );
  },

  async down(queryInterface) {
    const schema = 'sistemas';

    // *Drop "users" table
    await queryInterface.dropTable({ schema, tableName: 'users' });

    // *Drop "roles" table
    await queryInterface.dropTable({ schema, tableName: 'roles' });
  },
};
