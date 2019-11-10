import { Permissions, Roles } from '@vulpee/js-api';

import { Database } from '../../../typings/@adonisjs';

const Schema = use('Schema');

class EstablishmentsSchema extends Schema {
  public up() {
    this.create('establishments', table => {
      table.increments();

      table.string('name').notNullable();

      table.string('slug');

      table.string('address');

      table.string('complementary_address');

      table.string('zip_code');

      table.string('city');

      table.string('country');

      table.decimal('longitude', 8, 4);

      table.decimal('latitude', 8, 4);

      table.timestamps();
    });

    this.schedule(async (trx: Database.Transaction) => {
      await trx
        .insert([
          {
            type: Permissions.ViewEstablishment,
            description: 'View an establishment',
          },
          {
            type: Permissions.CreateEstablishment,
            description: 'Create an establishment',
          },
          {
            type: Permissions.EditEstablishment,
            description: 'Edit an establishment',
          },
          {
            type: Permissions.DeleteEstablishment,
            description: 'Delete an establishment',
          },
        ])
        .into('permissions');

      await trx
        .insert([
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.ViewEstablishment,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.CreateEstablishment,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.EditEstablishment,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.DeleteEstablishment,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.ViewEstablishment,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.EditEstablishment,
          },
          {
            role_type: Roles.Viewer,
            permission_type: Permissions.ViewEstablishment,
          },
        ])
        .into('roles_permissions');
    });
  }

  public down() {
    this.drop('establishments');
  }
}

export = EstablishmentsSchema;
