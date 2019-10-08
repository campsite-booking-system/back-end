import { IPermission } from '../../app/Types/Models';

const Establishment = use('App/Models/Establishment');
const EstablishmentContact = use('App/Models/EstablishmentContact');
const User = use('App/Models/User');
const EstablishmentToken = use('App/Models/EstablishmentToken');
const Permission = use('App/Models/Permission');

class EstablishmentSeeder {
  public async run() {
    // Create an establishment
    const establishmentOne = new Establishment();

    establishmentOne.name = 'Demo Establishment';
    establishmentOne.address = '777 Brockton Avenue';
    establishmentOne.zip_code = 'MA 2351';
    establishmentOne.city = 'Abington';
    establishmentOne.country = 'United States';

    await establishmentOne.save();

    // Create two contacts and add them to the establishment
    const establishmentContactOne = new EstablishmentContact();

    establishmentContactOne.establishment_id = establishmentOne.id;
    establishmentContactOne.name = 'John Doe';
    establishmentContactOne.email = 'john.doe@vulpee.com';
    establishmentContactOne.phone_number = '+33 01 02 03 04 05';
    establishmentContactOne.mobile_number = '+33 06 01 02 03 04';

    await establishmentContactOne.save();

    const establishmentContactTwo = new EstablishmentContact();

    establishmentContactTwo.establishment_id = establishmentOne.id;
    establishmentContactTwo.name = 'Jane Doe';
    establishmentContactTwo.email = 'jane.doe@vulpee.com';
    establishmentContactTwo.phone_number = '+33 01 02 03 04 05';
    establishmentContactTwo.mobile_number = '+33 06 01 02 03 04';

    await establishmentContactTwo.save();

    // Create an API token and add it to the establishment
    const establishmentToken = new EstablishmentToken();

    establishmentToken.establishment_id = establishmentOne.id;
    establishmentToken.name = 'Master token';

    await establishmentToken.save();

    // Get the manager and view users and add them to the establishment with the correct permissions
    const userManager = await User.findBy('email', 'manager@vulpee.com');
    const userView = await User.findBy('email', 'view@vulpee.com');

    await establishmentOne.users().attach([userManager.id, userView.id]);

    const permissionsQuery = await Permission.all();
    const permissionView = (await Permission.findBy('type', 'view_establishment')) as IPermission;

    const permissions = permissionsQuery.rows as IPermission[];

    await establishmentOne.permissions().createMany(
      permissions.map(permission => ({
        establishment_id: establishmentOne.id,
        user_id: userManager.id,
        permission_id: permission.id,
      })),
    );

    await establishmentOne.permissions().create({
      establishment_id: establishmentOne.id,
      user_id: userView.id,
      permission_id: permissionView.id,
    });
  }
}

export = EstablishmentSeeder;
