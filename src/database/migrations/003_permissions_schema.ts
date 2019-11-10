const Schema = use('Schema');

class PermissionsSchema extends Schema {
  public up() {
    this.create('permissions', table => {
      table.string('type', 100).primary();

      table.text('description').nullable();
    });
  }

  public down() {
    this.drop('permissions');
  }
}

export = PermissionsSchema;
