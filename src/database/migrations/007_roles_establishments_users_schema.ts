const Schema = use('Schema');

class RolesEstablishmentsUsersSchema extends Schema {
  public up() {
    this.create('roles_establishments_users', table => {
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .index();

      table
        .integer('establishment_id')
        .unsigned()
        .notNullable()
        .index();

      table
        .string('role_type')
        .notNullable()
        .index();

      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade');

      table
        .foreign('establishment_id')
        .references('id')
        .inTable('establishments')
        .onDelete('cascade');

      table
        .foreign('role_type')
        .references('type')
        .inTable('roles')
        .onDelete('cascade');
    });
  }

  public down() {
    this.drop('roles_establishments_users');
  }
}

export = RolesEstablishmentsUsersSchema;
