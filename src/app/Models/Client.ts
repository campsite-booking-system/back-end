const Model = use('Model');

class Client extends Model {
  static get Serializer() {
    return use('App/Serializers/ClientSerializer');
  }

  public establishment() {
    return this.belongsTo('App/Models/Establishment');
  }

  public bookings() {
    return this.hasMany('App/Models/Booking');
  }
}

export = Client;
