const Schema = use('Schema');

class UserTokensSchema extends Schema {
  public up() {
    this.create('user_tokens', table => {
      table.increments();

      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .index();

      table
        .string('token')
        .notNullable()
        .unique()
        .index();

      table.string('type', 60).notNullable();

      table.boolean('is_revoked').defaultTo(false);

      table.timestamps();

      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade');
    });
  }

  public down() {
    this.drop('user_tokens');
  }
}

export = UserTokensSchema;
