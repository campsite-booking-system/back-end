const Model = use('Model');

class Booking extends Model {
  static get Serializer() {
    return use('App/Serializers/BookingSerializer');
  }

  public client() {
    return this.belongsTo('App/Models/Client');
  }

  public accommodation() {
    return this.belongsTo('App/Models/Accommodation');
  }

  public rentals() {
    return this.belongsToMany('App/Models/Rental')
      .withPivot(['start_date', 'end_date'])
      .withTimestamps()
      .pivotTable('bookings_rentals');
  }

  public payments() {
    return this.hasMany('App/Models/Payment');
  }
}

export = Booking;
