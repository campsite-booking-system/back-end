const Schema = use('Schema');

class RolesPermissionsSchema extends Schema {
  public up() {
    this.create('roles_permissions', table => {
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
    this.drop('roles_permissions');
  }
}

export = RolesPermissionsSchema;
