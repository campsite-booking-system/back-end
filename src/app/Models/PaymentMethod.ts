const Model = use('Model');

class PaymentMethod extends Model {
  static get Serializer() {
    return use('App/Serializers/PaymentMethodSerializer');
  }
}

export = PaymentMethod;
