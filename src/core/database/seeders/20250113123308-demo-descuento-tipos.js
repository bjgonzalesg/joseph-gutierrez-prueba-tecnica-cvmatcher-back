'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'boletaspago';

    const data = [
      { codigo: '306', nombre: 'CAFAE-I' },
      { codigo: '306', nombre: 'CAFAE-C' },
      { codigo: '306', nombre: 'CAFAE-S' },
      { codigo: '306', nombre: 'CAFAE-PC2' },
      { codigo: '201', nombre: 'RET JUDIC' },
      { codigo: '306', nombre: 'CAFAE' },
      { codigo: '306', nombre: 'CAFAE-B' },
      { codigo: '401', nombre: 'RE.ECO/FIS' },
      { codigo: '58', nombre: 'ESTUDIOS INVESTIGACIONES' },
      { codigo: '105', nombre: '5TA.CATEG' },
    ];

    await queryInterface.bulkInsert(
      { schema, tableName: 'descuento_tipos' },
      data,
    );
  },

  async down(queryInterface) {
    const schema = 'boletaspago';

    await queryInterface.bulkDelete(
      { schema, tableName: 'descuento_tipos' },
      null,
      {},
    );

    await queryInterface.sequelize.query(
      'ALTER SEQUENCE boletaspago.descuento_tipos_id_seq RESTART WITH 1;',
    );
  },
};
