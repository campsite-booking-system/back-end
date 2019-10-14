import { RoleType, PermissionType } from '../Types';

const Model = use('Model');
const Hash = use('Hash');

class User extends Model {
  public static boot() {
    super.boot();

    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  public async role(establishmentId: number): Promise<any> {
    return this.roles()
      .where('establishment_id', establishmentId)
      .first();
  }

  public roles() {
    return this.belongsToMany('App/Models/Role').pivotTable('roles_establishments_users');
  }

  public async permissions(establishmentId: number) {
    const role = await this.role(establishmentId);

    return role.permissions().fetch();
  }

  public establishments() {
    return this.belongsToMany('App/Models/Establishment').pivotTable('roles_establishments_users');
  }

  public tokens() {
    return this.hasMany('App/Models/UserToken');
  }

  public async can(establishmentId: number, permission: PermissionType): Promise<boolean> {
    const permissions = await this.permissions(establishmentId);
    const permissionTypes: PermissionType[] = permissions.rows.map(item => item.type);

    return permissionTypes.includes(permission);
  }

  public async is(establishmentId: number, roleType: RoleType): Promise<boolean> {
    const role = await this.role(establishmentId);

    return role.type === roleType;
  }
}

export = User;
