import { Database } from '../../../../typings/@adonisjs';

import { Exception } from '../../Exceptions';

const Rental = use('App/Models/Rental');

async function getRentals(establishmentId: number): Promise<any> {
  try {
    const rentals = await Rental.query()
      .whereHas('category', (builder: Database.Builder) => {
        builder.where('establishment_id', establishmentId);
      })
      .fetch();

    return rentals;
  } catch (error) {
    throw new Exception(error);
  }
}

export default getRentals;
