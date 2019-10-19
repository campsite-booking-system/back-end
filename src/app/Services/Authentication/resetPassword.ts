import { ValidationException, InvalidTokenException, Exception } from '../../Exceptions';

const Persona = use('Persona');
const Antl = use('Antl');

async function resetPassword(token: string, password: string, passwordConfirmation: string): Promise<void> {
  try {
    await Persona.updatePasswordByToken(token, { password, password_confirmation: passwordConfirmation });
  } catch (error) {
    if (error.name === 'ValidationException') {
      throw new ValidationException(error.messages[0]);
    }

    if (error.name === 'InvalidTokenException') {
      throw new InvalidTokenException(Antl.formatMessage('errors.resetPasswordInvalidToken'));
    }

    throw new Exception();
  }
}

export default resetPassword;
