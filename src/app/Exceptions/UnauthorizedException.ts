import { HttpException } from '@adonisjs/generic-exceptions';

const Antl = use('Antl');

export default class UnauthorizedException extends HttpException {
  static get defaultMessage() {
    return Antl.formatMessage('errors.unauthorized');
  }

  constructor(message?: string) {
    super(JSON.stringify({ message: message || UnauthorizedException.defaultMessage }), 401);
  }
}
