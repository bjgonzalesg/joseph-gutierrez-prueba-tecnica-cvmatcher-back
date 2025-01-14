'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'sistemas';

    const adminRoleId = 1;

    const adminPages = [
      { rol_id: adminRoleId, pagina_id: 1 },
      { rol_id: adminRoleId, pagina_id: 2 },
      { rol_id: adminRoleId, pagina_id: 3 },
    ];

    await queryInterface.bulkInsert(
      { schema, tableName: 'roles_paginas' },
      [...adminPages],
      {},
    );
  },

  async down(queryInterface) {
    const schema = 'sistemas';

    await queryInterface.bulkDelete(
      { schema, tableName: 'roles_paginas' },
      null,
      {},
    );

    await queryInterface.sequelize.query(
      `ALTER SEQUENCE ${schema}.roles_paginas_id_seq RESTART WITH 1`,
    );
  },
};
