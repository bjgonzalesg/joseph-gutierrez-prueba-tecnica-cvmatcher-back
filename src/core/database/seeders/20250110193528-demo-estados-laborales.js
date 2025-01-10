'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'boletaspago';

    const data = [{ nombre: 'ACTIVO' }, { nombre: 'CESANTE' }];

    await queryInterface.bulkInsert(
      { schema, tableName: 'estados_laborales' },
      data,
      {},
    );
  },

  async down(queryInterface) {
    const schema = 'boletaspago';

    await queryInterface.bulkDelete(
      { schema, tableName: 'estados_laborales' },
      null,
      {},
    );

    await queryInterface.sequelize.query(
      `ALTER SEQUENCE ${schema}.estados_laborales_id_seq RESTART WITH 1`,
    );
  },
};
