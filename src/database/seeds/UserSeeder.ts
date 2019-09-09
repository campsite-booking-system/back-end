const User = use('App/Models/User');
const Role = use('App/Models/Role');

class UserSeeder {
  public async run() {
    // Create an admin role
    const adminRole = new Role();

    adminRole.name = 'Administrator';
    adminRole.type = 'administrator';
    adminRole.description = 'Manage administration privileges';

    await adminRole.save();

    // Create an admin user
    const adminUser = new User();

    adminUser.first_name = 'John';
    adminUser.last_name = 'Doe';
    adminUser.email = 'admin@gmail.com';
    adminUser.password = 'password';

    await adminUser.save();

    await adminRole.roles().attach(adminRole.id);

    // Create a manager user
    const managerUser = new User();

    managerUser.first_name = 'John';
    managerUser.last_name = 'Doe';
    managerUser.email = 'manager@gmail.com';
    managerUser.password = 'password';

    await managerUser.save();

    // Create a view user
    const viewUser = new User();

    viewUser.first_name = 'Jane';
    viewUser.last_name = 'Doe';
    viewUser.email = 'view@gmail.com';
    viewUser.password = 'password';

    await viewUser.save();
  }
}

export = UserSeeder;
