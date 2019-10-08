import { HttpException } from '@adonisjs/generic-exceptions';

const Antl = use('Antl');

export default class ForbiddenException extends HttpException {
  static get defaultMessage() {
    return Antl.formatMessage('errors.forbidden');
  }

  constructor(message?: string) {
    super(JSON.stringify({ message: message || ForbiddenException.defaultMessage }), 403);
  }
}
