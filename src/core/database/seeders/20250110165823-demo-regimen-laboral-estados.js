'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'boletaspago';

    const data = [{ nombre: 'NOMBRADO' }, { nombre: 'CONTRATADO' }];

    await queryInterface.bulkInsert(
      { schema, tableName: 'regimen_laboral_estados' },
      data,
    );
  },

  async down(queryInterface) {
    const schema = 'boletaspago';

    await queryInterface.bulkDelete(
      { schema, tableName: 'regimen_laboral_estados' },
      null,
      {},
    );
    await queryInterface.sequelize.query(
      `ALTER SEQUENCE ${schema}.regimen_laboral_estados_id_seq RESTART WITH 1`,
    );
  },
};
