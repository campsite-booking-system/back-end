import { PermissionTypes, PermissionType } from '../../app/Types';

const Permission = use('App/Models/Permission');

class PermissionSeeder {
  public async run() {
    await this.addPermission('View establishment', PermissionTypes.ViewEstablishment, 'View an establishment');
    await this.addPermission('Create establishment', PermissionTypes.CreateEstablishment, 'Create an establishment');
    await this.addPermission('Edit establishment', PermissionTypes.EditEstablishment, 'Edit an establishment');
    await this.addPermission('Delete establishment', PermissionTypes.DeleteEstablishment, 'Delete an establishment');

    await this.addPermission(
      'View establishment token',
      PermissionTypes.ViewEstablishmentToken,
      'View an establishment token',
    );
    await this.addPermission(
      'Create establishment token',
      PermissionTypes.CreateEstablishmentToken,
      'Create an establishment token',
    );
    await this.addPermission(
      'Edit establishment token',
      PermissionTypes.EditEstablishmentToken,
      'Edit an establishment token',
    );
    await this.addPermission(
      'Delete establishment token',
      PermissionTypes.DeleteEstablishmentToken,
      'Delete an establishment token',
    );

    await this.addPermission('View rental', PermissionTypes.ViewRental, 'View a rental');
    await this.addPermission('Create rental', PermissionTypes.CreateRental, 'Create a rental');
    await this.addPermission('Edit rental', PermissionTypes.EditRental, 'Edit a rental');
    await this.addPermission('Delete rental', PermissionTypes.DeleteRental, 'Delete a rental');
  }

  private async addPermission(name: string, type: PermissionType, description: string) {
    const permission = new Permission();

    permission.name = name;
    permission.type = type;
    permission.description = description;

    await permission.save();
  }
}

export = PermissionSeeder;
