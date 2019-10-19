import User from '../../Models/User';
import { Exception } from '../../Exceptions';

async function getEstablishments(user: User): Promise<any> {
  try {
    const establishments = await user.establishments().fetch();

    return establishments;
  } catch (error) {
    throw new Exception(error);
  }
}

export default getEstablishments;
