const Schema = use('Schema');

class RolesSchema extends Schema {
  public up() {
    this.create('roles', table => {
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
    this.drop('roles');
  }
}

export = RolesSchema;
