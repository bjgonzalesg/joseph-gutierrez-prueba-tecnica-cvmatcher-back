/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use strict';

// eslint-disable-next-line no-undef
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'sistemas';

    const userRoleId = 1;
    const proRoleId = 2;
    const adminRoleId = 3;

    const salt = bcrypt.genSaltSync(10);

    const userWithUserRole = {
      username: 'user',
      password: bcrypt.hashSync('user', salt),
      role_id: userRoleId,
    };

    const userWithProRole = {
      username: 'pro',
      password: bcrypt.hashSync('pro', salt),
      role_id: proRoleId,
    };

    const userWithAdminRole = {
      username: 'admin',
      password: bcrypt.hashSync('admin', salt),
      role_id: adminRoleId,
    };

    await queryInterface.bulkInsert(
      { schema, tableName: 'usuarios' },
      [userWithUserRole, userWithProRole, userWithAdminRole],
      {},
    );
  },

  async down(queryInterface) {
    const schema = 'sistemas';

    await queryInterface.bulkDelete(
      { schema, tableName: 'usuarios' },
      null,
      {},
    );

    await queryInterface.sequelize.query(
      `ALTER SEQUENCE ${schema}.usuarios_id_seq RESTART WITH 1`,
    );
  },
};
