'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'sistemas';

    const data = [
      {
        nombre: 'DASHBOARD',
        descripcion: 'Página principal del sistema',
        ruta: '/',
        icono: 'home',
      },
      {
        nombre: 'USUARIOS',
        descripcion: 'Gestión de usuarios',
        ruta: '/usuarios',
        icono: 'group',
      },
      {
        nombre: 'PERSONAS',
        descripcion: 'Gestión de personas',
        ruta: '/people',
        icono: 'groups',
      },
    ];

    await queryInterface.bulkInsert({ schema, tableName: 'paginas' }, data, {});
  },

  async down(queryInterface) {
    const schema = 'sistemas';

    await queryInterface.bulkDelete({ schema, tableName: 'paginas' }, null, {});

    await queryInterface.sequelize.query(
      `ALTER SEQUENCE ${schema}.paginas_id_seq RESTART WITH 1`,
    );
  },
};
