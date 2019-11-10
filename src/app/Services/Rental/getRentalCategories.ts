import { Exception } from '../../Exceptions';

const RentalCategory = use('App/Models/RentalCategory');

async function getRentalCategories(establishmentId: number): Promise<any> {
  try {
    const categories = await RentalCategory.query()
      .where('establishment_id', establishmentId)
      .fetch();

    return categories;
  } catch (error) {
    throw new Exception(error);
  }
}

export default getRentalCategories;
