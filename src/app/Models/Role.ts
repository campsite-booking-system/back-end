const Model = use('Model');

class Role extends Model {
  static get rules() {
    return {
      type: 'required|min:3|max:255|regex:^[a-zA-Z0-9_-]+$',
      name: 'required|min:3|max:255',
    };
  }

  static get Serializer() {
    return use('App/Serializers/RoleSerializer');
  }

  public permissions() {
    return this.belongsToMany('App/Models/Permission')
      .withTimestamps()
      .pivotTable('roles_permissions');
  }
}

export = Role;
