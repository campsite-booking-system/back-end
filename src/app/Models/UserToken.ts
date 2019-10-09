const User = use('App/Models/User');

const Model = use('Model');

class UserToken extends Model {
  public user() {
    return this.belongsTo('App/Models/User');
  }
}

export = UserToken;
