const User = use('App/Models/User');

const Model = use('Model');

class UserToken extends Model {
  public user() {
    return this.belongsTo(User);
  }
}

export = UserToken;
