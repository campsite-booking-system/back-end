import crypto from 'crypto';

const Model = use('Model');

const Establishment = use('App/Models/Establishment');

class EstablishmentToken extends Model {
  public static boot() {
    super.boot();

    this.addHook('beforeCreate', async tokenInstance => {
      tokenInstance.token = crypto.randomBytes(32).toString('hex');
    });
  }

  static get visible() {
    return ['id', 'name', 'token'];
  }

  public establishment() {
    return this.belongsTo(Establishment);
  }
}

export = EstablishmentToken;
