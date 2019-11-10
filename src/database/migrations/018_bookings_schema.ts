import { Permissions, Roles } from '@vulpee/js-api';

import { Database } from '../../../typings/@adonisjs';

const Schema = use('Schema');

class BookingsSchema extends Schema {
  public up() {
    this.create('bookings', table => {
      table.increments();

      table
        .integer('client_id')
        .unsigned()
        .notNullable()
        .index();

      table
        .integer('accommodation_id')
        .unsigned()
        .nullable()
        .index();

      table.date('start_date').notNullable();

      table.date('end_date').notNullable();

      table.timestamps();

      table
        .foreign('client_id')
        .references('id')
        .inTable('clients')
        .onDelete('cascade');

      table
        .foreign('accommodation_id')
        .references('id')
        .inTable('accommodations')
        .onDelete('set null');
    });

    this.schedule(async (trx: Database.Transaction) => {
      await trx
        .insert([
          {
            type: Permissions.ViewBooking,
            description: 'View a booking',
          },
          {
            type: Permissions.CreateBooking,
            description: 'Create a booking',
          },
          {
            type: Permissions.EditBooking,
            description: 'Edit a booking',
          },
          {
            type: Permissions.DeleteBooking,
            description: 'Delete a booking',
          },
        ])
        .into('permissions');

      await trx
        .insert([
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.ViewBooking,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.CreateBooking,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.EditBooking,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.DeleteBooking,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.ViewBooking,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.CreateBooking,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.EditBooking,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.DeleteBooking,
          },
          {
            role_type: Roles.Viewer,
            permission_type: Permissions.ViewBooking,
          },
        ])
        .into('roles_permissions');
    });
  }

  public down() {
    this.drop('bookings');
  }
}

export = BookingsSchema;
