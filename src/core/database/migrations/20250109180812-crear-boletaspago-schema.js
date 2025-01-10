'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createSchema('boletaspago');
  },

  async down(queryInterface) {
    await queryInterface.dropSchema('boletaspago');
  },
};
