import { UserRules } from '../../Rules';
import { ValidationException } from '../../Exceptions';

const Antl = use('Antl');

class Login {
  get rules() {
    return {
      uid: UserRules.email,
      password: UserRules.password,
    };
  }

  get messages() {
    return {
      'uid.required': Antl.formatMessage('errors.requiredEmail'),
      'uid.email': Antl.formatMessage('errors.invalidEmail'),
      'password.required': Antl.formatMessage('errors.requiredPassword'),
    };
  }

  public async fails(errorMessages: any[]) {
    throw new ValidationException(errorMessages[0]);
  }
}

export = Login;
