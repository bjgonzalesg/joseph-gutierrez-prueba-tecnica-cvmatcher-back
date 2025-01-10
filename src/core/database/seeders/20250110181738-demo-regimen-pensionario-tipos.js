'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'boletaspago';

    const data = [
      { nombre: 'INTEGRA' },
      { nombre: 'PRIMA' },
      { nombre: 'HABITAD' },
      { nombre: 'PROFUTURO' },
    ];

    await queryInterface.bulkInsert(
      { schema, tableName: 'regimen_pensionario_tipos' },
      data,
      {},
    );
  },

  async down(queryInterface) {
    const schema = 'boletaspago';

    await queryInterface.bulkDelete(
      { schema, tableName: 'regimen_pensionario_tipos' },
      null,
      {},
    );

    await queryInterface.sequelize.query(
      `ALTER SEQUENCE ${schema}.regimen_pensionario_tipos_id_seq RESTART WITH 1;`,
    );
  },
};
