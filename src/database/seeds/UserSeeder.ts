import { RoleTypes } from '../../app/Types';

const User = use('App/Models/User');
const Role = use('App/Models/Role');
const Establishment = use('App/Models/Establishment');

class UserSeeder {
  public static async createAdmin(establishmentId: number) {
    const user = new User();

    user.first_name = 'John';
    user.last_name = 'Doe';
    user.email = `admin-${establishmentId}@vulpee.com`;
    user.password = 'password';
    user.account_status = 'active';

    await user.save();

    const role = await Role.findBy('type', RoleTypes.Administrator);

    await user.establishments().attach([establishmentId], row => {
      row.role_id = role.id;
    });

    return user;
  }

  public static async createManager(establishmentId: number) {
    const user = new User();

    user.first_name = 'John';
    user.last_name = 'Doe';
    user.email = `manager-${establishmentId}@vulpee.com`;
    user.password = 'password';
    user.account_status = 'active';

    await user.save();

    const role = await Role.findBy('type', RoleTypes.Manager);

    await user.establishments().attach([establishmentId], row => {
      row.role_id = role.id;
    });

    return user;
  }

  public static async createViewer(establishmentId: number) {
    const user = new User();

    user.first_name = 'Jane';
    user.last_name = 'Doe';
    user.email = `viewer-${establishmentId}@vulpee.com`;
    user.password = 'password';
    user.account_status = 'active';

    await user.save();

    const role = await Role.findBy('type', RoleTypes.Viewer);

    await user.establishments().attach([establishmentId], row => {
      row.role_id = role.id;
    });
    return user;
  }

  public async run() {
    const user = new User();

    user.first_name = 'John';
    user.last_name = 'Doe';
    user.email = `admin@vulpee.com`;
    user.password = 'password';
    user.account_status = 'active';

    await user.save();

    const establishments = await Establishment.all();
    const establishmentIds = establishments.rows.map(establishment => establishment.id);

    const role = await Role.findBy('type', RoleTypes.Administrator);

    await user.establishments().attach(establishmentIds, row => {
      row.role_id = role.id;
    });

    return user;
  }
}

export = UserSeeder;
