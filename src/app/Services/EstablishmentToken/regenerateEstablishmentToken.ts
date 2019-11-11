import crypto from 'crypto';

import { NotFoundException, ForbiddenException } from '../../Exceptions';

const EstablishmentToken = use('App/Models/EstablishmentToken');

async function regenerateEstablishmentToken(id: number, establishmentId: number): Promise<any> {
  const token = await EstablishmentToken.find(id);

  if (token) {
    if (token.establishment_id === establishmentId) {
      token.token = crypto.randomBytes(32).toString('hex');

      await token.save();

      return token;
    }

    throw new ForbiddenException();
  }

  throw new NotFoundException();
}

export default regenerateEstablishmentToken;
