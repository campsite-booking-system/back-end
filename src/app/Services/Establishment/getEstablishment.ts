import User from '../../Models/User';
import { Exception } from '../../Exceptions';

const Establishment = use('App/Models/Establishment');

async function getEstablishment(establishmentId: number, user: User): Promise<any> {
  try {
    const establishment = await Establishment.find(establishmentId);
    const role = await user.role(establishment.id);

    await role.load('permissions');

    establishment.$relations.role = role;

    return establishment;
  } catch (error) {
    throw new Exception(error);
  }
}

export default getEstablishment;
