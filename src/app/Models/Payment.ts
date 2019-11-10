const Model = use('Model');

class Payment extends Model {
  static get Serializer() {
    return use('App/Serializers/PaymentSerializer');
  }

  public booking() {
    return this.belongsTo('App/Models/Booking');
  }

  public paymentMethod() {
    return this.belongsTo('App/Models/PaymentMethod');
  }
}

export = Payment;
