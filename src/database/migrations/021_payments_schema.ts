import { Permissions, Roles } from '@vulpee/js-api';

import { Database } from '../../../typings/@adonisjs';

const Schema = use('Schema');

class PaymentsSchema extends Schema {
  public up() {
    this.create('payments', table => {
      table.increments();

      table
        .integer('booking_id')
        .unsigned()
        .notNullable()
        .index();

      table
        .string('payment_method')
        .nullable()
        .index();

      table.float('amount', 2);

      table.timestamps();

      table
        .foreign('booking_id')
        .references('id')
        .inTable('bookings')
        .onDelete('cascade');

      table
        .foreign('payment_method')
        .references('type')
        .inTable('payment_methods')
        .onDelete('set null');
    });

    this.schedule(async (trx: Database.Transaction) => {
      await trx
        .insert([
          {
            type: Permissions.ViewPayment,
            description: 'View a payment',
          },
          {
            type: Permissions.CreatePayment,
            description: 'Create a payment',
          },
          {
            type: Permissions.EditPayment,
            description: 'Edit a payment',
          },
          {
            type: Permissions.DeletePayment,
            description: 'Delete a payment',
          },
        ])
        .into('permissions');

      await trx
        .insert([
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.ViewPayment,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.CreatePayment,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.EditPayment,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.DeletePayment,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.ViewPayment,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.CreatePayment,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.EditPayment,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.DeletePayment,
          },
          {
            role_type: Roles.Viewer,
            permission_type: Permissions.ViewPayment,
          },
        ])
        .into('roles_permissions');
    });
  }

  public down() {
    this.drop('payments');
  }
}

export = PaymentsSchema;
