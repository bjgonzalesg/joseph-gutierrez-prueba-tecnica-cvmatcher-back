'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const fns = `
      create or replace function sistemas.fn_get_usuario_por_username (_username varchar)
      returns table (
        id int, username varchar, surnames text, names varchar, "avatarUrl" varchar, role varchar, "allowedPaths" varchar[], status boolean
      )
      as $$
      begin
        return query
        select
          u.id as id,
          u.username as username,
          concat(p.apellido_paterno, ' ', p.apellido_materno) as surnames,
          p.nombres as names,
          u.avatar_url as "avatarUrl",
          r.nombre as role,
          array_agg(pa.ruta) as "allowedPaths",
          case 
            when u."deletedAt" is null then true
            else false
          end as status
        from sistemas.usuarios u
        inner join sistemas.personas p
        on u.persona_id = p.id
        inner join sistemas.roles r
        on r.id = u.rol_id
        inner join sistemas.roles_paginas rp 
        on rp.rol_id = r.id
        inner join sistemas.paginas pa
        on pa.id = rp.pagina_id
        where u.username = _username
        group by u.id, p.apellido_paterno , p.apellido_materno, p.nombres, r.nombre, u."deletedAt";
      end$$ language plpgsql;
    `;

    await queryInterface.sequelize.query(fns);
  },

  async down(queryInterface) {
    const fns = `
      drop function sistemas.fn_get_usuario_por_username (_username varchar);
    `;

    await queryInterface.sequelize.query(fns);
  },
};
