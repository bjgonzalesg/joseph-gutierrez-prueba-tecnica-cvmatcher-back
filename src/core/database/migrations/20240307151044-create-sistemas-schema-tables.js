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

    //* Create "people" table
    await queryInterface.createTable(
      {
        schema,
        tableName: 'people',
      },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        surnames: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        names: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        document: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        nacionality: {
          type: Sequelize.DataTypes.STRING,
        },

        telephone: {
          type: Sequelize.DataTypes.STRING,
        },

        gender: {
          type: Sequelize.DataTypes.STRING,
        },

        date: {
          type: Sequelize.DataTypes.DATEONLY,
        },

        address: {
          type: Sequelize.DataTypes.STRING,
        },

        ...timestamp,
      },
    );

    //* Create "roles" table
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

        description: {
          type: Sequelize.DataTypes.STRING,
        },

        ...timestamp,
      },
    );

    //* Create "usuarios" table
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

        person_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          references: {
            model: 'people',
            key: 'id',
          },
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

    //* Create "paginas" table
    await queryInterface.createTable(
      {
        schema,
        tableName: 'pages',
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

        description: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        path: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        icon: {
          type: Sequelize.DataTypes.STRING,
        },

        ...timestamp,
      },
    );

    //* Create "roles_paginas" table
    await queryInterface.createTable(
      {
        schema,
        tableName: 'roles_pages',
      },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        role_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'roles',
            key: 'id',
          },
        },

        page_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'pages',
            key: 'id',
          },
        },

        ...timestamp,
      },
    );
  },

  async down(queryInterface) {
    const schema = 'sistemas';

    // * Drop roles_pages table
    await queryInterface.dropTable({
      schema,
      tableName: 'roles_pages',
    });

    // * Drop pages table
    await queryInterface.dropTable({
      schema,
      tableName: 'pages',
    });

    // * Drop users table
    await queryInterface.dropTable({
      schema,
      tableName: 'users',
    });

    // * Drop roles table
    await queryInterface.dropTable({
      schema,
      tableName: 'roles',
    });

    // * Drop people table
    await queryInterface.dropTable({
      schema,
      tableName: 'people',
    });
  },
};
