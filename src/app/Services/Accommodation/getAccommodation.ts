import { Database } from '../../../../typings/@adonisjs';

import { Exception, NotFoundException } from '../../Exceptions';

const Accommodation = use('App/Models/Accommodation');

async function getAccommodation(establishmentId: number, accommodationId: number): Promise<any> {
  try {
    const accommodation = await Accommodation.query()
      .where('accommodations.id', accommodationId)
      .whereHas('category', (builder: Database.Builder) => {
        builder.where('establishment_id', establishmentId);
      })
      .with('characteristics')
      .with('services')
      .first();

    if (accommodation) {
      return accommodation;
    }
  } catch (error) {
    throw new Exception(error);
  }

  throw new NotFoundException();
}

export default getAccommodation;
