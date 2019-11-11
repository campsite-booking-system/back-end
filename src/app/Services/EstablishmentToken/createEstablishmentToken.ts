import { Exception } from '../../Exceptions';
import { tokenNameIsUnique } from './helpers';

const EstablishmentToken = use('App/Models/EstablishmentToken');

async function createEstablishmentToken(name: string, establishmentId: number): Promise<any> {
  await tokenNameIsUnique(name, establishmentId);

  try {
    const token = await EstablishmentToken.create({ name, establishment_id: establishmentId });

    return token;
  } catch (error) {
    throw new Exception(error);
  }
}

export default createEstablishmentToken;
