const Establishment = use('App/Models/Establishment');
const Rental = use('App/Models/Rental');
const RentalCharacteristic = use('App/Models/RentalCharacteristic');
const RentalService = use('App/Models/RentalService');

class RentalSeeder {
  public async run() {
    const characteristics = await this.createCharacteristics();
    const services = await this.createServices();

    await this.createRentals(characteristics, services);
  }

  private async createRentals(characteristics, services) {
    const establishmentOne = await Establishment.findBy('name', 'Camping Lestaubière');

    [1, 2, 3].forEach(async index => {
      const rental = new Rental();

      rental.establishment_id = establishmentOne.id;
      rental.name = `Rental ${index}`;
      rental.description =
        '<p>Lorem ipsum dolor sit amet, id per magna dicta postea, mel et eros ullum. Sed ea vocibus detraxit dissentiunt, dicta noster option cum at. Cu duo blandit appetere, magna populo philosophia pro an. An quando voluptatum mea, magna nonumes denique ex pri. Has delicata conceptam ut, et qui commune conceptam. His at appareat conceptam mediocritatem, volumus tacimates vis ad.</p>\n<p><br></p>\n<p>Harum salutandi intellegat nec eu. Enim habeo ne pro, ius imperdiet consequat in, postulant vituperatoribus mel ut. Mel debitis tincidunt mnesarchum at. Mea in detraxit praesent expetenda. Graeco aliquip fabulas est ex, ius iriure eleifend an, percipit oporteat democritum in vix. Cu mea wisi latine, ut sit commodo insolens.</p>\n<p><br></p>\n<p>Id ius tota tollit, habemus eleifend assueverit eu vis. No delenit recteque abhorreant nam, eu vis falli theophrastus, prima dolorem nec ea. Cu mel pericula dissentiet delicatissimi. Et simul verear eam, modus virtute ad nec. Ea iuvaret aliquam conclusionemque pri, qui ea modus nonumy nominavi, et brute evertitur mea. Ad mea enim eros verear.</p>';

      await rental.save();

      await rental.characteristics().attach(characteristics.people.id, async row => {
        row.value = index * 4;
      });

      await rental.characteristics().attach(characteristics.chambers.id, async row => {
        row.value = index * 2;
      });

      await rental.characteristics().attach(characteristics.singleBeds.id, async row => {
        row.value = index * 2;
      });

      await rental.characteristics().attach(characteristics.doubleBeds.id, async row => {
        row.value = index;
      });

      await rental.characteristics().attach(characteristics.bathrooms.id, async row => {
        row.value = index;
      });

      await rental.characteristics().attach(characteristics.squareMeters.id, async row => {
        row.value = index * 40;
      });

      await services.forEach(async service => {
        if (Math.random() >= 0.3) {
          await rental.services().attach(service.id);
        }
      });
    });
  }

  private async createCharacteristic(label: string) {
    const characteristic = new RentalCharacteristic();

    characteristic.label = label;

    characteristic.save();

    return characteristic;
  }

  private async createCharacteristics() {
    return {
      people: await this.createCharacteristic('People'),
      chambers: await this.createCharacteristic('Chambers'),
      singleBeds: await this.createCharacteristic('Single beds'),
      doubleBeds: await this.createCharacteristic('Double beds'),
      bathrooms: await this.createCharacteristic('Bathrooms'),
      squareMeters: await this.createCharacteristic('Square meters'),
    };
  }

  private async createService(label: string) {
    const service = new RentalService();

    service.label = label;

    service.save();

    return service;
  }

  private async createServices() {
    return [
      await this.createService('WiFi'),
      await this.createService('Washing machine'),
      await this.createService('Dryer'),
      await this.createService('Coffee machine'),
      await this.createService('Swimming pool'),
      await this.createService('Elevator'),
      await this.createService('Television'),
      await this.createService('Bath'),
      await this.createService('Parking'),
      await this.createService('Microwave'),
    ];
  }
}

export = RentalSeeder;
