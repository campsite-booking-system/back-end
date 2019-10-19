import { RoleTypes, PermissionTypes } from '../../app/Types';
import { IPermission } from '../../app/Types/Models';

const Role = use('App/Models/Role');
const Permission = use('App/Models/Permission');

class RoleSeeder {
  public async run() {
    await this.createAdminRole();
    await this.createManagerRole();
    await this.createViewerRole();
  }

  private async createAdminRole() {
    const role = new Role();

    role.name = 'Administrator';
    role.type = RoleTypes.Administrator;

    await role.save();
    const permissionsQuery = await Permission.all();

    const permissionIds = permissionsQuery.rows.map((permission: IPermission) => permission.id);

    await role.permissions().attach(permissionIds);
  }

  private async createManagerRole() {
    const role = new Role();

    role.name = 'Manager';
    role.type = RoleTypes.Manager;

    await role.save();

    const permissionsQuery = await Permission.query()
      .whereIn('type', [
        PermissionTypes.ViewEstablishment,
        PermissionTypes.EditEstablishment,
        PermissionTypes.ViewEstablishmentToken,
        PermissionTypes.CreateEstablishmentToken,
        PermissionTypes.EditEstablishmentToken,
        PermissionTypes.DeleteEstablishmentToken,
        PermissionTypes.ViewRental,
        PermissionTypes.CreateRental,
        PermissionTypes.EditRental,
        PermissionTypes.DeleteRental,
      ])
      .fetch();

    const permissionIds = permissionsQuery.rows.map((permission: IPermission) => permission.id);

    await role.permissions().attach(permissionIds);
  }

  private async createViewerRole() {
    const role = new Role();

    role.name = 'Viewer';
    role.type = RoleTypes.Viewer;

    await role.save();

    const permissionsQuery = await Permission.query()
      .whereIn('type', [
        PermissionTypes.ViewEstablishment,
        PermissionTypes.ViewEstablishmentToken,
        PermissionTypes.ViewRental,
      ])
      .fetch();

    const permissionIds = permissionsQuery.rows.map((permission: IPermission) => permission.id);

    await role.permissions().attach(permissionIds);
  }
}

export = RoleSeeder;
