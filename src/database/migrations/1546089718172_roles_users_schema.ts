const Schema = use('Schema');

class RolesUsersSchema extends Schema {
  public up() {
    this.create('roles_users', table => {
      table.increments();

      table
        .integer('role_id')
        .unsigned()
        .index();

      table
        .foreign('role_id')
        .references('id')
        .inTable('roles')
        .onDelete('cascade');

      table
        .integer('user_id')
        .unsigned()
        .index();

      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade');

      table.timestamps();
    });
  }

  public down() {
    this.drop('roles_users');
  }
}

export = RolesUsersSchema;
