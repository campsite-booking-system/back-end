const Model = use('Model');

class Role extends Model {
  static get rules() {
    return {
      type: 'required|min:1|max:100|regex:^[a-zA-Z0-9_-]+$|unique:roles,type',
      description: 'min:1|max:1000',
    };
  }

  static get Serializer() {
    return use('App/Serializers/RoleSerializer');
  }

  public permissions() {
    return this.belongsToMany('App/Models/Permission', 'role_type', 'permission_type', 'type', 'type').pivotTable(
      'roles_permissions',
    );
  }
}

export = Role;
