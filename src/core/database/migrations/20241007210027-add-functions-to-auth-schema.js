'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.sequelize.query(
      `
      create or replace function sistemas.fn_get_user_by_username(_username varchar)
      returns table (
        id int4, 
        username varchar,
        names varchar,
        surnames varchar,
        document varchar,
        role varchar,
        pages varchar[],
        status boolean
      )
      as $$
      begin
        return query
        select 
          u.id as id,
          u.username as username,
          p.names as names,
          p.surnames as surnames,
          p.document as document,
          r."name" as role,
          array_agg(pa."path") as pages,
          case	
            when u."deletedAt" is null then true
            else false
          end as status
        from sistemas.users u
        inner join sistemas.roles r 
        on u.role_id = r.id
        inner join sistemas.people p 
        on u.person_id = p.id
        left join sistemas.roles_pages rp 
        on r.id = rp.role_id
        left join sistemas.pages pa 
        on rp.page_id = pa.id
        where u.username = _username
        group by u.id, p.names, p.surnames, p."document", r."name" ;
      end;
      $$ language plpgsql;
      `,
    );
  },

  async down(queryInterface) {
    await queryInterface.sequelize.query(
      `
      drop function sistemas.fn_get_user_by_username(_username varchar);
      `,
    );
  },
};
