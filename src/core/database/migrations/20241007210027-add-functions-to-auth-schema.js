'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(
      `
      `,
    );
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(
      `
      `,
    );
  },
};
