import { UserRules } from '../../Rules';
import { ValidationException } from '../../Exceptions';

const Antl = use('Antl');

class ResetPassword {
  get rules() {
    return {
      password: UserRules.password,
      passwordConfirmation: UserRules.password,
    };
  }

  get messages() {
    return {
      'password.required': Antl.formatMessage('errors.requiredPassword'),
      'passwordConfirmation.required': Antl.formatMessage('errors.requiredPasswordConfirmation'),
    };
  }

  public async fails(errorMessages) {
    throw new ValidationException(errorMessages[0]);
  }
}

export = ResetPassword;
