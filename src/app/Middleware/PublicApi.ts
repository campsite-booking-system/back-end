const Establishment = use('App/Models/Establishment');
const EstablishmentToken = use('App/Models/EstablishmentToken');

import { ForbiddenException } from '../Exceptions';

class PublicApi {
  public async handle({ request, subdomains }, next) {
    const token = request.header('Authorization');

    if (!token) {
      throw new ForbiddenException('No authentication token has been provided.');
    }

    const establishment = await Establishment.findBy('slug', subdomains.establishment);

    if (!establishment) {
      throw new ForbiddenException();
    }

    const establishmentToken = await EstablishmentToken.query()
      .where('establishment_id', establishment.id)
      .where('token', token)
      .fetch();

    if (establishmentToken.rows.length === 0) {
      throw new ForbiddenException();
    }

    await next();
  }
}

export = PublicApi;
