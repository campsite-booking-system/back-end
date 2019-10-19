import { ValidationException, Exception } from '../../Exceptions';

const Persona = use('Persona');

async function forgotPassword(uid: string): Promise<void> {
  try {
    await Persona.forgotPassword(uid);
  } catch (error) {
    if (error.name === 'ValidationException') {
      throw new ValidationException(error.messages[0]);
    }

    throw new Exception();
  }
}

export default forgotPassword;
