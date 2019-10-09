import { HttpException } from '@adonisjs/generic-exceptions';

const Antl = use('Antl');

export default class InvalidTokenException extends HttpException {
  static get defaultMessage() {
    return Antl.formatMessage('errors.invalidToken');
  }

  constructor(message?: string) {
    super(JSON.stringify({ message: message || InvalidTokenException.defaultMessage }), 404);
  }
}
