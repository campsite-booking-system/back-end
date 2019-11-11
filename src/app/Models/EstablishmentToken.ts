import crypto from 'crypto';

const Model = use('Model');

class EstablishmentToken extends Model {
  public static boot() {
    super.boot();

    this.addHook('beforeCreate', async token => {
      token.token = crypto.randomBytes(32).toString('hex');
    });
  }

  static get Serializer() {
    return use('App/Serializers/EstablishmentTokenSerializer');
  }

  public establishment() {
    return this.belongsTo('App/Models/Establishment');
  }
}

export = EstablishmentToken;
