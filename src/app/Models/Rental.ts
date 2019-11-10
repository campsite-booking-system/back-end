const Model = use('Model');

class Rental extends Model {
  static get Serializer() {
    return use('App/Serializers/RentalSerializer');
  }

  public category() {
    return this.belongsTo('App/Models/RentalCategory', 'category_id');
  }

  public bookings() {
    return this.belongsToMany('App/Models/Booking')
      .withPivot(['start_date', 'end_date'])
      .withTimestamps()
      .pivotTable('bookings_rentals');
  }
}

export = Rental;
