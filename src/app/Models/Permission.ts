const Model = use('Model');

class Permission extends Model {
  static get rules() {
    return {
      type: 'required|min:1|max:255|regex:^[a-zA-Z0-9_-]+$',
      name: 'required|min:1|max:255',
      description: 'min:3|max:1000',
    };
  }

  static get Serializer() {
    return use('App/Serializers/PermissionSerializer');
  }
}

export = Permission;
