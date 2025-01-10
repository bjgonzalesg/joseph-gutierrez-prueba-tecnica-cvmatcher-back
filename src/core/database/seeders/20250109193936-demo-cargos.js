'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'boletaspago';

    const data = [
      { nombre: 'ASOCIADO' },
      { nombre: 'DOC.CONTR.' },
      { nombre: 'TECNICO' },
      { nombre: 'FUNCIONARIO' },
      { nombre: 'PRINCIPAL' },
      { nombre: 'AUXILIAR' },
      { nombre: 'PROFESIONAL' },
    ];

    await queryInterface.bulkInsert({ schema, tableName: 'cargos' }, data);
  },

  async down(queryInterface) {
    const schema = 'boletaspago';

    await queryInterface.bulkDelete({ schema, tableName: 'cargos' }, null);
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE boletaspago.cargos_id_seq RESTART WITH 1;',
    );
  },
};
