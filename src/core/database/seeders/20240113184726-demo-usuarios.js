'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'sistemas';

    const adminRoleId = 1;

    const peopleWithAdminRole = [
      {
        apellido_paterno: 'NÚÑEZ',
        apellido_materno: 'CASAUX',
        nombres: 'ROBERTO JUNIOR',
        documento_tipo_id: 1,
        documento: '75608743',
      },
      {
        apellido_paterno: 'GONZALES',
        apellido_materno: 'GUTIERREZ',
        nombres: 'BRANDON JOSEPH',
        documento_tipo_id: 1,
        documento: '70452182',
      },
    ];

    await queryInterface.bulkInsert(
      { schema, tableName: 'personas' },
      peopleWithAdminRole,
      {},
    );

    // * Hash passwords
    const salt = bcrypt.genSaltSync(10);

    const usersWithAdminRole = peopleWithAdminRole.map((person, index) => ({
      username: person.documento,
      password: bcrypt.hashSync(person.documento, salt),
      persona_id: index + 1,
      rol_id: adminRoleId,
    }));

    await queryInterface.bulkInsert(
      { schema, tableName: 'usuarios' },
      usersWithAdminRole,
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
