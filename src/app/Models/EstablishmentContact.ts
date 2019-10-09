const Model = use('Model');

class EstablishmentContact extends Model {
  static get Serializer() {
    return use('App/Serializers/EstablishmentContactSerializer');
  }

  public establishment() {
    return this.belongsTo('App/Models/Establishment');
  }
}

export = EstablishmentContact;
