import { Http } from '../../../typings/@adonisjs';

import { ForbiddenException } from '../Exceptions';

const Antl = use('Antl');

const Establishment = use('App/Models/Establishment');
const EstablishmentToken = use('App/Models/EstablishmentToken');

class PublicApi {
  public async handle({ request, subdomains }: Http.Context, next: () => void) {
    const token = request.header('Authorization');

    if (!token) {
      throw new ForbiddenException(Antl.formatMessage('errors.missingToken'));
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
