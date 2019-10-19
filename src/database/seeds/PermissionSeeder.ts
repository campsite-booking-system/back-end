const Permission = use('App/Models/Permission');

class PermissionSeeder {
  public async run() {
    await this.addPermission('View establishment', 'view_establishment', 'View an establishment');
    await this.addPermission('Edit establishment', 'edit_establishment', 'Edit an establishment');
    await this.addPermission('Delete establishment', 'delete_establishment', 'Delete an establishment');

    await this.addPermission('View establishment tokens', 'view_establishment_tokens', 'View establishment tokens');
    await this.addPermission('Create establishment token', 'create_establishment_token', 'Create establishment token');
    await this.addPermission('Edit establishment token', 'edit_establishment_token', 'Edit establishment token');
    await this.addPermission('Delete establishment token', 'delete_establishment_token', 'Delete establishment token');

    await this.addPermission('View rentals', 'view_rentals', 'View rentals');
    await this.addPermission('Create rental', 'create_rental', 'Create rental');
    await this.addPermission('Edit rental', 'edit_rental', 'Edit rental');
    await this.addPermission('Delete rental', 'delete_rental', 'Delete rental');
  }

  public async addPermission(name: string, type: string, description: string) {
    const permission = new Permission();

    permission.name = name;
    permission.type = type;
    permission.description = description;

    await permission.save();
  }
}

export = PermissionSeeder;
