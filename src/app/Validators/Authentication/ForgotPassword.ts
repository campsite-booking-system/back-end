import { UserRules } from '../../Rules';
import { ValidationException } from '../../Exceptions';

const Antl = use('Antl');

class ForgotPassword {
  get rules() {
    return {
      uid: UserRules.email,
    };
  }

  get messages() {
    return {
      'uid.required': Antl.formatMessage('errors.requiredEmail'),
      'uid.email': Antl.formatMessage('errors.invalidEmail'),
    };
  }

  public async fails(errorMessages: any[]) {
    throw new ValidationException(errorMessages[0]);
  }
}

export = ForgotPassword;
