const Rental = use('App/Models/Rental');
const RentalCategory = use('App/Models/RentalCategory');

class RentalSeeder {
  public static async createRentals(establishmentId: number) {
    console.log('hello');
    const fridgeCategory = await this.createRentalCategory('Fridge', establishmentId);

    for await (const index of Array.from(Array(20).keys())) {
      await this.createRental(index, 'Fridge', fridgeCategory.id);
    }
  }

  public static async createRentalCategory(name: string, establishmentId: number) {
    const category = new RentalCategory();

    category.establishment_id = establishmentId;
    category.name = name;

    await category.save();

    return category;
  }

  public static async createRental(index: number, categoryName: string, categoryId: number) {
    const rental = new Rental();

    rental.category_id = categoryId;
    rental.name = `${categoryName} ${index + 1}`;

    await rental.save();
  }
}

export = RentalSeeder;
