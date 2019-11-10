import { Exception } from '../../Exceptions';

const AccommodationCategory = use('App/Models/AccommodationCategory');

async function getAccommodationCategories(establishmentId: number): Promise<any> {
  try {
    const categories = await AccommodationCategory.query()
      .where('establishment_id', establishmentId)
      .fetch();

    return categories;
  } catch (error) {
    throw new Exception(error);
  }
}

export default getAccommodationCategories;
