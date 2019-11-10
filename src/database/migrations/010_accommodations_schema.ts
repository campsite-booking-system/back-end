import { Permissions, Roles } from '@vulpee/js-api';

import { Database } from '../../../typings/@adonisjs';

const Schema = use('Schema');

class AccommodationsSchema extends Schema {
  public up() {
    this.create('accommodations', table => {
      table.increments();

      table
        .integer('category_id')
        .unsigned()
        .nullable()
        .index();

      table.string('name').notNullable();

      table.text('description');

      table.timestamps();

      table
        .foreign('category_id')
        .references('id')
        .inTable('accommodation_categories')
        .onDelete('set null');
    });

    this.schedule(async (trx: Database.Transaction) => {
      await trx
        .insert([
          {
            type: Permissions.ViewAccommodation,
            description: 'View an accommodation',
          },
          {
            type: Permissions.CreateAccommodation,
            description: 'Create an accommodation',
          },
          {
            type: Permissions.EditAccommodation,
            description: 'Edit an accommodation',
          },
          {
            type: Permissions.DeleteAccommodation,
            description: 'Delete an accommodation',
          },
        ])
        .into('permissions');

      await trx
        .insert([
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.ViewAccommodation,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.CreateAccommodation,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.EditAccommodation,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.DeleteAccommodation,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.ViewAccommodation,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.CreateAccommodation,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.EditAccommodation,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.DeleteAccommodation,
          },
          {
            role_type: Roles.Viewer,
            permission_type: Permissions.ViewAccommodation,
          },
        ])
        .into('roles_permissions');
    });
  }

  public down() {
    this.drop('accommodations');
  }
}

export = AccommodationsSchema;
