'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'boletaspago';

    const boletaTipos = [
      { nombre: 'CAFAE' },
      { nombre: 'RENACYT' },
      { nombre: 'INVESTIGACION' },
    ];

    await queryInterface.bulkInsert(
      { schema, tableName: 'boletas_pago_tipos' },
      boletaTipos,
    );
  },

  async down(queryInterface) {
    const schema = 'boletaspago';

    await queryInterface.bulkDelete(
      { schema, tableName: 'boletas_pago_tipos' },
      null,
    );

    await queryInterface.sequelize.query(
      'ALTER SEQUENCE boletaspago.boletas_pago_tipos_id_seq RESTART WITH 1;',
    );
  },
};
