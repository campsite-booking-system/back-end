import { NotFoundException, ForbiddenException } from '../../Exceptions';
import { tokenNameIsUnique } from './helpers';

const EstablishmentToken = use('App/Models/EstablishmentToken');

async function updateEstablishmentToken(id: number, name: string, establishmentId: number): Promise<any> {
  const token = await EstablishmentToken.find(id);

  if (token) {
    if (token.establishment_id === establishmentId) {
      await tokenNameIsUnique(name, establishmentId);

      token.name = name;

      await token.save();

      return token;
    }

    throw new ForbiddenException();
  }

  throw new NotFoundException();
}

export default updateEstablishmentToken;
