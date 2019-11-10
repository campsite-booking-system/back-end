import { Http } from '../../../../../../typings/@adonisjs';

import { RentalService } from '../../../../Services';

class RentalController {
  public async index({ request }: Http.Context) {
    const { establishment } = request.params;

    return RentalService.getRentals(Number(establishment));
  }

  public async get({ request }: Http.Context) {
    const { establishment, rental } = request.params;

    return RentalService.getRental(Number(establishment), Number(rental));
  }

  public async categories({ request }: Http.Context) {
    const { establishment } = request.params;

    return RentalService.getRentalCategories(Number(establishment));
  }

  public async category({ request }: Http.Context) {
    const { establishment, category } = request.params;

    return RentalService.getRentalCategory(Number(establishment), Number(category));
  }
}

export = RentalController;
