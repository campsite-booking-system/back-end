import { Database } from '../../../../typings/@adonisjs';

import { Exception } from '../../Exceptions';

const Accommodation = use('App/Models/Accommodation');

async function getAccommodations(establishmentId: number): Promise<any> {
  try {
    const accommodations = await Accommodation.query()
      .whereHas('category', (builder: Database.Builder) => {
        builder.where('establishment_id', establishmentId);
      })
      .fetch();

    return accommodations;
  } catch (error) {
    throw new Exception(error);
  }
}

export default getAccommodations;
