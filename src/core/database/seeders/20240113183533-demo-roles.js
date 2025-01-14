'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const schema = 'sistemas';

    const data = [{ nombre: 'ADMIN' }];

    await queryInterface.bulkInsert({ schema, tableName: 'roles' }, data, {});
  },

  async down(queryInterface, Sequelize) {
    const schema = 'sistemas';

    await queryInterface.bulkDelete({ schema, tableName: 'roles' }, null, {});

    await queryInterface.sequelize.query(
      `ALTER SEQUENCE ${schema}.roles_id_seq RESTART WITH 1`,
    );
  },
};
