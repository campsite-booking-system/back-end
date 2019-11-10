const Model = use('Model');

class Permission extends Model {
  static get rules() {
    return {
      type: 'required|min:1|max:100|regex:^[a-zA-Z0-9_-]+$|unique:permissions,type',
      description: 'min:1|max:1000',
    };
  }

  static get Serializer() {
    return use('App/Serializers/PermissionSerializer');
  }

  public roles() {
    return this.belongsToMany('App/Models/Role', 'permission_type', 'role_type', 'type', 'type').pivotTable(
      'roles_permissions',
    );
  }
}

export = Permission;
