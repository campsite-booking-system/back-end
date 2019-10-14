import UserSeeder from './UserSeeder';
import RentalSeeder from './RentalSeeder';

const Establishment = use('App/Models/Establishment');
const EstablishmentToken = use('App/Models/EstablishmentToken');

class EstablishmentSeeder {
  private rentalSeeder: RentalSeeder;

  constructor() {
    this.rentalSeeder = new RentalSeeder();
  }

  public async run() {
    await this.rentalSeeder.createCharacteristics();
    await this.rentalSeeder.createServices();

    for await (const index of [1, 2, 3]) {
      await this.createEstablishment(index);
    }
  }

  private async createEstablishment(id: number) {
    // Create an establishment
    const establishment = new Establishment();

    establishment.name = `Demo Establishment ${id}`;
    establishment.address = '777 Brockton Avenue';
    establishment.zip_code = 'MA 2351';
    establishment.city = 'Abington';
    establishment.country = 'United States';

    await establishment.save();

    // Create three rentals and add them to the establishment
    await this.rentalSeeder.createRentals(establishment.id);

    // Create an API token and add it to the establishment
    await this.createEstablishmentToken('Master', establishment.id);

    // Get the manager and view users and add them to the establishment with the correct permissions
    await this.createUsers(establishment);
  }

  private async createEstablishmentToken(name: string, establishmentId: number) {
    const establishmentToken = new EstablishmentToken();

    establishmentToken.establishment_id = establishmentId;
    establishmentToken.name = `${name} token`;

    await establishmentToken.save();
  }

  private async createUsers(establishment: any) {
    const admin = await UserSeeder.createAdmin(establishment.id);
    const manager = await UserSeeder.createManager(establishment.id);
    const viewer = await UserSeeder.createViewer(establishment.id);

    await establishment.users().attach([admin.id, manager.id, viewer.id]);
  }
}

export = EstablishmentSeeder;
