import { EstablishmentTokenRules } from '../../Rules';
import { ValidationException } from '../../Exceptions';

const Antl = use('Antl');

class Token {
  get rules() {
    return {
      name: EstablishmentTokenRules.name,
    };
  }

  get messages() {
    return {
      'name.required': Antl.formatMessage('errors.requiredEstablishmentTokenName'),
      'name.min': Antl.formatMessage('errors.minEstablishmentTokenNotUniqueName'),
      'name.max': Antl.formatMessage('errors.maxEstablishmentTokenNotUniqueName'),
    };
  }

  public async fails(errorMessages: any[]) {
    throw new ValidationException(errorMessages[0]);
  }
}

export = Token;
