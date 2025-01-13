'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'boletaspago';

    const data = [
      { codigo: '190', nombre: 'DS 002-17-EF (C' },
      { codigo: '197', nombre: 'DS 004-18-EF (C' },
      { codigo: '179', nombre: 'DS 195-12-EF (C' },
      { codigo: '189', nombre: 'DS 009-16-EF (C' },
      { codigo: '211', nombre: 'DS 421-19-EF (C' },
      { codigo: '219', nombre: 'DS 003-22-EF (C' },
      { codigo: '172', nombre: 'D.S. 008-2009-E' },
      { codigo: '174', nombre: 'DS 105-10-EF (C' },
      { codigo: '202', nombre: 'DS 004-19-EF (C' },
      { codigo: '217', nombre: 'DS 427-20-EF (C' },
      { codigo: '58', nombre: 'ESTUDIOS INVEST' },
      { codigo: '204', nombre: 'LEY 30220 ART.8' },
      { codigo: '24', nombre: 'REINT.REMUNER.I' },
    ];

    await queryInterface.bulkInsert(
      { schema, tableName: 'haber_tipos' },
      data,
      {},
    );
  },

  async down(queryInterface) {
    const schema = 'boletaspago';

    await queryInterface.bulkDelete(
      { schema, tableName: 'haber_tipos' },
      null,
      {},
    );

    await queryInterface.sequelize.query(
      'ALTER SEQUENCE boletaspago.haber_tipos_id_seq RESTART WITH 1;',
    );
  },
};
