'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'boletaspago';

    const data = [
      { nombre: 'D. LEG 276', descripcion: 'ADMNISTRATIVO' },
      { nombre: 'D. LEG 1057', descripcion: 'CAS' },
      { nombre: 'LEY 30220', descripcion: 'DOCENTE UNIVERSITARIO' },
      { nombre: 'LEY 30057', descripcion: 'ALTO FUNCIONARIO' },
    ];

    await queryInterface.bulkInsert(
      { schema, tableName: 'regimen_laboral_leyes' },
      data,
      {},
    );
  },

  async down(queryInterface) {
    const schema = 'boletaspago';

    await queryInterface.bulkDelete(
      { schema, tableName: 'regimen_laboral' },
      null,
      {},
    );

    await queryInterface.sequelize.query(
      `ALTER SEQUENCE ${schema}.regimen_laboral_id_seq RESTART WITH 1`,
    );
  },
};
