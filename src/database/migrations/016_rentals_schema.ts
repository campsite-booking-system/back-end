import { Permissions, Roles } from '@vulpee/js-api';

import { Database } from '../../../typings/@adonisjs';

const Schema = use('Schema');

class RentalsSchema extends Schema {
  public up() {
    this.create('rentals', table => {
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
        .inTable('rental_categories')
        .onDelete('set null');
    });

    this.schedule(async (trx: Database.Transaction) => {
      await trx
        .insert([
          {
            type: Permissions.ViewRental,
            description: 'View a rental',
          },
          {
            type: Permissions.CreateRental,
            description: 'Create a rental',
          },
          {
            type: Permissions.EditRental,
            description: 'Edit a rental',
          },
          {
            type: Permissions.DeleteRental,
            description: 'Delete a rental',
          },
        ])
        .into('permissions');

      await trx
        .insert([
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.ViewRental,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.CreateRental,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.EditRental,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.DeleteRental,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.ViewRental,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.CreateRental,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.EditRental,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.DeleteRental,
          },
          {
            role_type: Roles.Viewer,
            permission_type: Permissions.ViewRental,
          },
        ])
        .into('roles_permissions');
    });
  }

  public down() {
    this.drop('rentals');
  }
}

export = RentalsSchema;
