const Schema = use('Schema');

class RolesPermissionsSchema extends Schema {
  public up() {
    this.create('roles_permissions', table => {
      table
        .string('role_type')
        .notNullable()
        .index();

      table
        .string('permission_type')
        .notNullable()
        .index();

      table
        .foreign('role_type')
        .references('type')
        .inTable('roles')
        .onDelete('cascade');

      table
        .foreign('permission_type')
        .references('type')
        .inTable('permissions')
        .onDelete('cascade');
    });
  }

  public down() {
    this.drop('roles_permissions');
  }
}

export = RolesPermissionsSchema;
