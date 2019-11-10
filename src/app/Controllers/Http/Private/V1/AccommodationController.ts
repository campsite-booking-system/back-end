import { Http } from '../../../../../../typings/@adonisjs';

import { AccommodationService } from '../../../../Services';

class AccommodationController {
  public async index({ request }: Http.Context) {
    const { establishment } = request.params;

    return AccommodationService.getAccommodations(Number(establishment));
  }

  public async get({ request }: Http.Context) {
    const { establishment, accommodation } = request.params;

    return AccommodationService.getAccommodation(Number(establishment), Number(accommodation));
  }

  public async categories({ request }: Http.Context) {
    const { establishment } = request.params;

    return AccommodationService.getAccommodationCategories(Number(establishment));
  }

  public async category({ request }: Http.Context) {
    const { establishment, category } = request.params;

    return AccommodationService.getAccommodationCategory(Number(establishment), Number(category));
  }
}

export = AccommodationController;
