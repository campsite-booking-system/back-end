import { check } from 'acler';

import { PermissionTypes, PermissionType, RoleType } from '../Types';
import { IRole, IPermission, IEstablishment, IEstablishmentUserPermission } from '../Types/Models';

const Model = use('Model');
const Hash = use('Hash');

const Role = use('App/Models/Role');
const Establishment = use('App/Models/Establishment');
const EstablishmentsUsersPermissions = use('App/Models/EstablishmentsUsersPermissions');
const Permission = use('App/Models/Permission');
const UserToken = use('App/Models/UserToken');

class User extends Model {
  public static boot() {
    super.boot();

    this.addHook('beforeSave', async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  public roles() {
    return this.belongsToMany(Role)
      .withTimestamps()
      .pivotTable('roles_users');
  }

  public permissions() {
    return this.hasMany(EstablishmentsUsersPermissions);
  }

  public establishments() {
    return this.hasMany(Establishment);
  }

  public tokens() {
    return this.hasMany(UserToken);
  }

  public async getRoles(): Promise<RoleType[]> {
    const rolesQuery = await this.roles().fetch();
    const roles = rolesQuery.rows as IRole[];

    return roles.map(role => role.type);
  }

  public async getPermissions(establishmentId: number): Promise<PermissionType[]> {
    const establishmentPermissionsQuery = await this.permissions()
      .where('establishment_id', establishmentId)
      .fetch();
    const establishmentPermissions = establishmentPermissionsQuery.rows as IEstablishmentUserPermission[];

    const permissionIds = establishmentPermissions.map(row => row.permission_id);

    const permissionsQuery = await Permission.query()
      .whereIn('id', permissionIds)
      .fetch();
    const permissions = permissionsQuery.rows as IPermission[];

    return permissions.map(permission => permission.type);
  }

  public async getViewableEstablishments(): Promise<{ id: number; name: string }[]> {
    const establishmentQuery = await this.establishments().fetch();
    const establishments = establishmentQuery.rows as IEstablishment[];

    return establishments
      .filter(async establishment => this.can(establishment.id, PermissionTypes.ViewEstablishment))
      .map(establishment => ({ id: establishment.id, name: establishment.name }));
  }

  public async is(expression): Promise<boolean> {
    const roles = await this.getRoles();

    return check(expression, operand => roles.includes(operand));
  }

  public async can(establishmentId: number, property: PermissionType): Promise<boolean> {
    const permissions = await this.getPermissions(establishmentId);

    return permissions.includes(property);
  }
}

export = User;
