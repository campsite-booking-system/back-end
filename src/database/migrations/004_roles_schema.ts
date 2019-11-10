import { Database } from '../../../typings/@adonisjs';
import { Roles } from '@vulpee/js-api';

const Schema = use('Schema');

class RolesSchema extends Schema {
  public up() {
    this.create('roles', table => {
      table.string('type', 60).primary();

      table.text('description').nullable();
    });

    this.schedule(async (trx: Database.Transaction) => {
      await trx
        .insert([
          {
            type: Roles.Administrator,
          },
          {
            type: Roles.Manager,
          },
          {
            type: Roles.Viewer,
          },
        ])
        .into('roles');
    });
  }

  public down() {
    this.drop('roles');
  }
}

export = RolesSchema;
