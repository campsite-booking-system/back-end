import { Permissions, Roles } from '@vulpee/js-api';

import { Database } from '../../../typings/@adonisjs';

const Schema = use('Schema');

class EstablishmentTokensSchema extends Schema {
  public up() {
    this.create('establishment_tokens', table => {
      table.increments();

      table
        .integer('establishment_id')
        .unsigned()
        .notNullable()
        .index();

      table.string('name', 255).notNullable();

      table
        .string('token', 255)
        .notNullable()
        .unique()
        .index();

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
            type: Permissions.ViewEstablishmentToken,
            description: 'View an establishment token',
          },
          {
            type: Permissions.CreateEstablishmentToken,
            description: 'Create an establishment token',
          },
          {
            type: Permissions.EditEstablishmentToken,
            description: 'Edit an establishment token',
          },
          {
            type: Permissions.DeleteEstablishmentToken,
            description: 'Delete an establishment token',
          },
        ])
        .into('permissions');

      await trx
        .insert([
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.ViewEstablishmentToken,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.CreateEstablishmentToken,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.EditEstablishmentToken,
          },
          {
            role_type: Roles.Administrator,
            permission_type: Permissions.DeleteEstablishmentToken,
          },
        ])
        .into('roles_permissions');
    });
  }

  public down() {
    this.drop('establishment_tokens');
  }
}

export = EstablishmentTokensSchema;
