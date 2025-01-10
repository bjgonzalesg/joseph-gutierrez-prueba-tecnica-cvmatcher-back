'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'boletaspago';

    const data = [
      { ley_id: 1, tipo_id: 1 },
      { ley_id: 1, tipo_id: 2 },
      { ley_id: 1, tipo_id: 3 },
      { ley_id: 1, tipo_id: 4 },
      { ley_id: 2 },
      { ley_id: 3 },
    ];

    await queryInterface.bulkInsert(
      { schema, tableName: 'regimenes_pensionarios' },
      data,
      {},
    );
  },

  async down(queryInterface) {
    const schema = 'boletaspago';

    await queryInterface.bulkDelete(
      { schema, tableName: 'regimenes_pensionarios' },
      null,
      {},
    );

    await queryInterface.sequelize.query(
      `ALTER SEQUENCE ${schema}.regimenes_pensionarios_id_seq RESTART WITH 1;`,
    );
  },
};
