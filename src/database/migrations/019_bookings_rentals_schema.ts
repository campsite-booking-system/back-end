const Schema = use('Schema');

class BookingsRentalsSchema extends Schema {
  public up() {
    this.create('bookings_rentals', table => {
      table
        .integer('booking_id')
        .unsigned()
        .notNullable()
        .index();

      table
        .integer('rental_id')
        .unsigned()
        .notNullable()
        .index();

      table.date('start_date').notNullable();

      table.date('end_date').notNullable();

      table.timestamps();

      table
        .foreign('booking_id')
        .references('id')
        .inTable('bookings')
        .onDelete('cascade');

      table
        .foreign('rental_id')
        .references('id')
        .inTable('rentals')
        .onDelete('cascade');
    });
  }

  public down() {
    this.drop('bookings_rentals');
  }
}

export = BookingsRentalsSchema;
