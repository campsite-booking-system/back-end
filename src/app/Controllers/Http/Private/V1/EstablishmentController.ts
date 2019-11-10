import { Http } from '../../../../../../typings/@adonisjs';

import { EstablishmentService } from '../../../../Services';

class EstablishmentController {
  public async index({ auth }: Http.Context) {
    const user = await auth.getUser();

    return EstablishmentService.getEstablishments(user);
  }

  public async get({ request, auth }: Http.Context) {
    const { establishment } = request.params;

    const user = await auth.getUser();

    return EstablishmentService.getEstablishment(Number(establishment), user);
  }
}

export = EstablishmentController;
