import { Exception, NotFoundException } from '../../Exceptions';

const RentalCategory = use('App/Models/RentalCategory');

async function getRentalCategory(establishmentId: number, categoryId: number): Promise<any> {
  try {
    const category = await RentalCategory.query()
      .where('id', categoryId)
      .where('establishment_id', establishmentId)
      .with('rentals')
      .first();

    if (category) {
      return category;
    }
  } catch (error) {
    throw new Exception(error);
  }

  throw new NotFoundException();
}

export default getRentalCategory;
