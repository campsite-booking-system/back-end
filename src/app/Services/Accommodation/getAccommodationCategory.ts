import { Exception, NotFoundException } from '../../Exceptions';

const AccommodationCategory = use('App/Models/AccommodationCategory');

async function getAccommodationCategory(establishmentId: number, categoryId: number): Promise<any> {
  try {
    const category = await AccommodationCategory.query()
      .where('id', categoryId)
      .where('establishment_id', establishmentId)
      .with('accommodations')
      .first();

    if (category) {
      return category;
    }
  } catch (error) {
    throw new Exception(error);
  }

  throw new NotFoundException();
}

export default getAccommodationCategory;
