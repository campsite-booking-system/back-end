const Schema = use('Schema');

class PermissionsSchema extends Schema {
  public up() {
    this.create('permissions', table => {
      table.increments();

      table
        .string('type')
        .notNullable()
        .unique();

      table
        .string('name')
        .notNullable()
        .unique();

      table.text('description').nullable();

      table.timestamps();
    });
  }

  public down() {
    this.drop('permissions');
  }
}

export = PermissionsSchema;
