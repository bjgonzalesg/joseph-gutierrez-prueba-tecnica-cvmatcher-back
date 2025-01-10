'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createSchema('sistemas');
  },

  async down(queryInterface) {
    await queryInterface.dropSchema('sistemas');
  },
};
