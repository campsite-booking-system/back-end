import { AccommodationCharacteristics, AccommodationServices } from '@vulpee/js-api';

const Accommodation = use('App/Models/Accommodation');
const AccommodationCategory = use('App/Models/AccommodationCategory');

class AccommodationSeeder {
  public static async createAccommodations(establishmentId: number) {
    const pitchCategory = await this.createAccommodationCategory('Pitch', establishmentId);

    for await (const index of Array.from(Array(50).keys())) {
      await this.createAccommodation(index, 'Pitch', pitchCategory.id);
    }

    const mobilhomeCategory = await this.createAccommodationCategory('Mobilhome', establishmentId);

    for await (const index of Array.from(Array(10).keys())) {
      await this.createAccommodation(index, 'Mobilhome', mobilhomeCategory.id);
    }
  }

  public static async createAccommodationCategory(name: string, establishmentId: number) {
    const category = new AccommodationCategory();

    category.establishment_id = establishmentId;
    category.name = name;

    await category.save();

    return category;
  }

  public static async createAccommodation(index: number, categoryName: string, categoryId: number) {
    const accommodation = new Accommodation();

    accommodation.category_id = categoryId;
    accommodation.name = `${categoryName} ${index + 1}`;

    await accommodation.save();

    // Create the rental characteristics
    await accommodation.characteristics().attach(AccommodationCharacteristics.People, async (row: any) => {
      row.value = 4;
    });

    await accommodation.characteristics().attach(AccommodationCharacteristics.Chambers, async (row: any) => {
      row.value = 2;
    });

    await accommodation.characteristics().attach(AccommodationCharacteristics.SingleBeds, async (row: any) => {
      row.value = 2;
    });

    await accommodation.characteristics().attach(AccommodationCharacteristics.DoubleBeds, async (row: any) => {
      row.value = 1;
    });

    await accommodation.characteristics().attach(AccommodationCharacteristics.Bathrooms, async (row: any) => {
      row.value = 1;
    });

    await accommodation.characteristics().attach(AccommodationCharacteristics.SquareMeters, async (row: any) => {
      row.value = 40;
    });

    // Create the accommodation services
    for await (const key of Object.keys(AccommodationServices)) {
      if (Math.random() >= 0.3) {
        const service = AccommodationServices[key as keyof typeof AccommodationServices];

        await accommodation.services().attach(service);
      }
    }
  }
}

export = AccommodationSeeder;
