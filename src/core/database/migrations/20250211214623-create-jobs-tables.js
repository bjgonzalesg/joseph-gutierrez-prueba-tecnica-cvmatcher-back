'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
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

    await queryInterface.createTable(
      { schema: 'jobs', tableName: 'jobs' },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        title: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        enterprise: {
          type: Sequelize.DataTypes.STRING,
        },

        location: {
          type: Sequelize.DataTypes.STRING,
        },

        publishedAt: {
          type: Sequelize.DataTypes.STRING,
        },

        description: {
          type: Sequelize.DataTypes.TEXT,
        },

        ...timestamp,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({ schema: 'jobs', tableName: 'jobs' });
  },
};
