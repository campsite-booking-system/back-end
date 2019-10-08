import { ValidationException, Exception } from '../../Exceptions';

const Persona = use('Persona');

async function login(auth: any, uid, password): Promise<{ token: string }> {
  try {
    const user = await Persona.verify({ uid, password });
    const { token } = await auth.generate(user);

    return { token };
  } catch (error) {
    if (error.name === 'ValidationException') {
      throw new ValidationException(error.messages[0]);
    }

    throw new Exception();
  }
}

export default login;
