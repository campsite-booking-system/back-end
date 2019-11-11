import { Http } from '../../../../../../typings/@adonisjs';

import { EstablishmentTokenService } from '../../../../Services';

class EstablishmentTokenController {
  public async index({ request }: Http.Context) {
    const { establishment } = request.params;

    return EstablishmentTokenService.getEstablishmentTokens(Number(establishment));
  }

  public async create({ request, response }: Http.Context) {
    const { establishment } = request.params;
    const { name } = request.only(['name']);

    const token = await EstablishmentTokenService.createEstablishmentToken(name, Number(establishment));

    return response.status(201).send(token);
  }

  public async edit({ request }: Http.Context) {
    const { establishment, id } = request.params;
    const { name } = request.only(['name']);

    return EstablishmentTokenService.updateEstablishmentToken(Number(id), name, Number(establishment));
  }

  public async regenerate({ request }: Http.Context) {
    const { establishment, id } = request.params;

    return EstablishmentTokenService.regenerateEstablishmentToken(Number(id), Number(establishment));
  }

  public async delete({ request }: Http.Context) {
    const { establishment, id } = request.params;

    return EstablishmentTokenService.deleteEstablishmentToken(Number(id), Number(establishment));
  }
}

export = EstablishmentTokenController;
