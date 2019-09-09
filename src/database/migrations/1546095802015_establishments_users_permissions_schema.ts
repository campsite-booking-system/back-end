const Schema = use('Schema');

class EstablishmentsUsersPermissionsSchema extends Schema {
  public up() {
    this.create('establishments_users_permissions', table => {
      table.increments();

      table
        .integer('user_id')
        .unsigned()
        .index();

      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade');

      table
        .integer('establishment_id')
        .unsigned()
        .index();

      table
        .foreign('establishment_id')
        .references('id')
        .inTable('establishments')
        .onDelete('cascade');

      table
        .integer('permission_id')
        .unsigned()
        .index();

      table
        .foreign('permission_id')
        .references('id')
        .inTable('permissions')
        .onDelete('cascade');

      table.timestamps();
    });
  }

  public down() {
    this.drop('establishments_users_permissions');
  }
}

export = EstablishmentsUsersPermissionsSchema;
