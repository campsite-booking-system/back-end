import { HttpException } from '@adonisjs/generic-exceptions';

const Antl = use('Antl');

export default class NotFoundException extends HttpException {
  static get defaultMessage() {
    return Antl.formatMessage('errors.notFound');
  }

  constructor(message?: string) {
    super(JSON.stringify({ message: message || NotFoundException.defaultMessage }), 404);
  }
}
