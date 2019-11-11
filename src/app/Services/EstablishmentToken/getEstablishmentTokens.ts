import { Exception } from '../../Exceptions';

const EstablishmentToken = use('App/Models/EstablishmentToken');

async function getEstablishmentTokens(establishmentId: number): Promise<any> {
  try {
    const tokens = await EstablishmentToken.query()
      .orderBy('created_at')
      .where('establishment_id', establishmentId)
      .fetch();

    return tokens;
  } catch (error) {
    throw new Exception(error);
  }
}

export default getEstablishmentTokens;
