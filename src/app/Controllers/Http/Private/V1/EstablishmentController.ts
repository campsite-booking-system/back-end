import { Http } from '../../../../../../typings/@adonisjs';

import { EstablishmentService } from '../../../../Services';

class EstablishmentController {
  public async index({ auth }: Http.Context) {
    const user = await auth.getUser();

    return EstablishmentService.getEstablishments(user);
  }

  public async get({ request, auth }: Http.Context) {
    const user = await auth.getUser();
    const { establishment } = request.params;

    return EstablishmentService.getEstablishment(establishment, user);
  }
}

export = EstablishmentController;
