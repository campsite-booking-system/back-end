import { Http } from '../../../typings/@adonisjs';

import User from '../Models/User';
import { ValidationException, Exception, InvalidTokenException, UnauthorizedException } from '../Exceptions';

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

      throw new Exception();
    }
  }

  private context: Http.Context;

  constructor(context: Http.Context) {
    this.context = context;
  }

  public async login(uid: string, password: string): Promise<{ token: string }> {
    try {
      const user = (await Persona.verify({ uid, password })) as User;

      await this.context.auth.revokeTokensForUser(user);

      const { token } = await this.context.auth.generate(user);

      return { token };
    } catch (error) {
      if (error.name === 'ValidationException') {
        throw new ValidationException(error.messages[0]);
      }

      throw new Exception();
    }
  }

  public async logout(): Promise<void> {
    try {
      await this.context.auth.revokeTokens();
    } catch (error) {
      throw new Exception();
    }
  }

  public async verify(): Promise<void> {
    try {
      await this.context.auth.check();
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}

export default AuthenticationService;
