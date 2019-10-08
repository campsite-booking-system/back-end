import { HttpException } from '@adonisjs/generic-exceptions';

export default class ValidationException extends HttpException {
  static get defaultMessage() {
    return 'Validation failed';
  }

  constructor(message?: any) {
    super(JSON.stringify(message || ValidationException.defaultMessage), 400);
  }
}
