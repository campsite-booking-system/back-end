const Schema = use('Schema');

class UsersSchema extends Schema {
  public up() {
    this.create('users', table => {
      table.increments();

      table
        .string('email')
        .notNullable()
        .unique();

      table.string('password', 60).notNullable();

      table.string('first_name').notNullable();

      table.string('last_name').notNullable();

      table.string('account_status', 60);

      table.timestamps();
    });
  }

  public down() {
    this.drop('users');
  }
}

export = UsersSchema;
