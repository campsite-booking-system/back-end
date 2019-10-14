const Schema = use('Schema');

class UserTokensSchema extends Schema {
  public up() {
    this.create('user_tokens', table => {
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
        .string('token', 255)
        .notNullable()
        .unique()
        .index();

      table.string('type', 80).notNullable();

      table.boolean('is_revoked').defaultTo(false);

      table.timestamps();
    });
  }

  public down() {
    this.drop('user_tokens');
  }
}

export = UserTokensSchema;
