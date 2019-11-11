import { NotFoundException, ForbiddenException } from '../../Exceptions';

const EstablishmentToken = use('App/Models/EstablishmentToken');

async function deleteEstablishmentToken(id: number, establishmentId: number): Promise<void> {
  const token = await EstablishmentToken.find(id);

  if (token) {
    if (token.establishment_id === establishmentId) {
      await token.delete();
    } else {
      throw new ForbiddenException();
    }
  } else {
    throw new NotFoundException();
  }
}

export default deleteEstablishmentToken;
