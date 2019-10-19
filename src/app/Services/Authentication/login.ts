import User from '../../Models/User';
import { ValidationException, Exception } from '../../Exceptions';
import { AuthenticationService } from '..';

const Persona = use('Persona');

async function login(this: AuthenticationService, uid: string, password: string): Promise<{ token: string }> {
  try {
    const user = (await Persona.verify({ uid, password })) as User;

    await this.auth.revokeTokensForUser(user);

    const { token } = await this.auth.generate(user);

    return { token };
  } catch (error) {
    if (error.name === 'ValidationException') {
      throw new ValidationException(error.messages[0]);
    }

    throw new Exception();
  }
}

export default login;
