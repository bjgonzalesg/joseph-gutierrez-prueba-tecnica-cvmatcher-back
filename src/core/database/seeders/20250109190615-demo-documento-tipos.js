'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'sistemas';

    const data = [
      { nombre: 'DOCUMENTO NACIONAL DE IDENTIDAD', abreviatura: 'DNI' },
      { nombre: 'CARNET DE EXTRANJERÍA', abreviatura: 'C.E.' },
    ];

    await queryInterface.bulkInsert(
      { schema, tableName: 'documento_tipos' },
      data,
    );
  },

  async down(queryInterface, Sequelize) {
    const schema = 'sistemas';

    await queryInterface.bulkDelete(
      { schema, tableName: 'documento_tipos' },
      null,
    );

    await queryInterface.sequelize.query(
      `ALTER SEQUENCE ${schema}.documento_tipos_id_seq RESTART WITH 1`,
    );
  },
};
