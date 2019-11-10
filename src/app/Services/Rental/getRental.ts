import { Database } from '../../../../typings/@adonisjs';

import { Exception, NotFoundException } from '../../Exceptions';

const Rental = use('App/Models/Rental');

async function getRental(establishmentId: number, rentalId: number): Promise<any> {
  try {
    const rental = await Rental.query()
      .where('rentals.id', rentalId)
      .whereHas('category', (builder: Database.Builder) => {
        builder.where('establishment_id', establishmentId);
      })
      .first();

    if (rental) {
      return rental;
    }
  } catch (error) {
    throw new Exception(error);
  }

  throw new NotFoundException();
}

export default getRental;
