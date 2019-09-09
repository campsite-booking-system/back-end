const Model = use('Model');

class Role extends Model {
  static get rules() {
    return {
      type: 'required|min:3|max:255|regex:^[a-zA-Z0-9_-]+$',
      name: 'required|min:3|max:255',
      description: 'min:3|max:1000',
    };
  }

  static get visible() {
    return ['id', 'name', 'description'];
  }

  public roles() {
    return this.belongsToMany('App/Models/User')
      .withTimestamps()
      .pivotTable('roles_users');
  }
}

export = Role;
