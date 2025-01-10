'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'boletaspago';

    const data = [
      { nombre: 'LEY 25897', descripcion: 'AFP' },
      { nombre: 'LEY 19990', descripcion: 'SNP' },
      { nombre: 'D. LEY 20530', descripcion: 'Pensiones' },
    ];

    await queryInterface.bulkInsert(
      { schema, tableName: 'regimen_pensionario_leyes' },
      data,
      {},
    );
  },

  async down(queryInterface) {
    const schema = 'boletaspago';

    await queryInterface.bulkDelete(
      { schema, tableName: 'regimen_pensionario_leyes' },
      null,
      {},
    );

    await queryInterface.sequelize.query(
      `ALTER SEQUENCE ${schema}.regimen_pensionario_leyes_id_seq RESTART WITH 1;`,
    );
  },
};
