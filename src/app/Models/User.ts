import { Roles, Permissions } from '@vulpee/js-api';

import { IPermission } from '../Types/Models';

const Model = use('Model');
const Hash = use('Hash');

class User extends Model {
  public static boot() {
    super.boot();

    this.addHook('beforeSave', async user => {
      if (user.dirty.password) {
        user.password = await Hash.make(user.password);
      }
    });
  }

  static get Serializer() {
    return use('App/Serializers/UserSerializer');
  }

  public async role(establishmentId: number): Promise<any> {
    return this.roles()
      .where('establishment_id', establishmentId)
      .first();
  }

  public roles() {
    return this.belongsToMany('App/Models/Role', 'user_id', 'role_type', 'id', 'type')
      .pivotTable('roles_establishments_users')
      .withPivot(['establishment_id'])
      .pivotPrimaryKey(null);
  }

  public async permissions(establishmentId: number) {
    const role = await this.role(establishmentId);

    return role.permissions().fetch();
  }

  public establishments() {
    return this.belongsToMany('App/Models/Establishment')
      .pivotTable('roles_establishments_users')
      .pivotPrimaryKey(null);
  }

  public tokens() {
    return this.hasMany('App/Models/UserToken');
  }

  public async can(establishmentId: number, permissions: Permissions[]): Promise<boolean> {
    const userPermissions = await this.permissions(establishmentId);
    const permissionTypes: Permissions[] = userPermissions.rows.map((item: IPermission) => item.type);

    let hasUnmetPermission = false;

    permissions.forEach(permission => {
      if (!permissionTypes.includes(permission)) {
        hasUnmetPermission = true;
      }
    });

    return !hasUnmetPermission;
  }

  public async is(establishmentId: number, roleType: Roles): Promise<boolean> {
    const role = await this.role(establishmentId);

    return role.type === roleType;
  }
}

export = User;
