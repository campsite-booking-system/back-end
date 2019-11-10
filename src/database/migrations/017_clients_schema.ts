import { Permissions, Roles } from '@vulpee/js-api';

import { Database } from '../../../typings/@adonisjs';

const Schema = use('Schema');

class ClientsSchema extends Schema {
  public up() {
    this.create('clients', table => {
      table.increments();

      table
        .integer('establishment_id')
        .unsigned()
        .notNullable()
        .index();

      table.string('civility', 60).notNullable();

      table.string('name').notNullable();

      table.timestamps();

      table
        .foreign('establishment_id')
        .references('id')
        .inTable('establishments')
        .onDelete('cascade');
    });

    this.schedule(async (trx: Database.Transaction) => {
      await trx
        .insert([
          {
            type: Permissions.ViewClient,
            description: 'View a client',
          },
          {
            type: Permissions.CreateClient,
            description: 'Create a client',
          },
          {
            type: Permissions.EditClient,
            description: 'Edit a client',
          },
          {
            type: Permissions.DeleteClient,
            description: 'Delete a client',
          },
        ])
        .into('permissions');

      await trx
        .insert([
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.ViewClient,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.CreateClient,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.EditClient,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.DeleteClient,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.ViewClient,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.CreateClient,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.EditClient,
          },
          {
            role_type: Roles.Manager,
            permission_type: Permissions.DeleteClient,
          },
          {
            role_type: Roles.Viewer,
            permission_type: Permissions.ViewClient,
          },
        ])
        .into('roles_permissions');
    });
  }

  public down() {
    this.drop('clients');
  }
}

export = ClientsSchema;
