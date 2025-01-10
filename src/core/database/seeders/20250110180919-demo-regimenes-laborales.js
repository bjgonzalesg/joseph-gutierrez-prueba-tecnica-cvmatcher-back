'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'boletaspago';

    const data = [
      {
        ley_id: 1,
        estado_id: 1,
      },
      {
        ley_id: 1,
        estado_id: 2,
      },
      {
        ley_id: 2,
        estado_id: 1,
      },
      {
        ley_id: 2,
        estado_id: 2,
      },
      {
        ley_id: 3,
        estado_id: 1,
      },
      {
        ley_id: 3,
        estado_id: 2,
      },
      {
        ley_id: 4,
        estado_id: 1,
      },
    ];

    await queryInterface.bulkInsert(
      { schema, tableName: 'regimenes_laborales' },
      data,
      {},
    );
  },

  async down(queryInterface) {
    const schema = 'boletaspago';

    await queryInterface.bulkDelete(
      { schema, tableName: 'regimenes_laborales' },
      null,
      {},
    );

    await queryInterface.sequelize.query(
      `ALTER SEQUENCE ${schema}.regimenes_laborales_id_seq RESTART WITH 1`,
    );
  },
};
