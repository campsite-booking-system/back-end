const Model = use('Model');

const Establishment = use('App/Models/Establishment');

class EstablishmentContact extends Model {
  static get Serializer() {
    return use('App/Serializers/EstablishmentContactSerializer');
  }

  public establishment() {
    return this.belongsTo(Establishment);
  }
}

export = EstablishmentContact;
