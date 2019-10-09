import { ValidationException, Exception, InvalidTokenException } from '../Exceptions';

const Persona = use('Persona');
const Antl = use('Antl');

class AuthenticationService {
  public static async forgotPassword(uid: string): Promise<void> {
    try {
      await Persona.forgotPassword(uid);
    } catch (error) {
      if (error.name === 'ValidationException') {
        throw new ValidationException(error.messages[0]);
      }

      throw new Exception();
    }
  }

  public static async resetPassword(token: string, password: string, passwordConfirmation: string): Promise<void> {
    try {
      await Persona.updatePasswordByToken(token, { password, password_confirmation: passwordConfirmation });
    } catch (error) {
      if (error.name === 'ValidationException') {
        throw new ValidationException(error.messages[0]);
      }

      if (error.name === 'InvalidTokenException') {
        throw new InvalidTokenException(Antl.formatMessage('errors.resetPasswordInvalidToken'));
      }

      console.log(error.name, error);

      throw new Exception();
    }
  }

  private context;

  constructor(context) {
    this.context = context;
  }

  public async login(uid: string, password: string): Promise<{ token: string }> {
    try {
      const user = await Persona.verify({ uid, password });
      const { token } = await this.context.auth.generate(user);

      return { token };
    } catch (error) {
      if (error.name === 'ValidationException') {
        throw new ValidationException(error.messages[0]);
      }

      throw new Exception();
    }
  }
}

export default AuthenticationService;
