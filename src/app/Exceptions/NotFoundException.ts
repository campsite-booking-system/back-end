import { HttpException } from '@adonisjs/generic-exceptions';

export default class NotFoundException extends HttpException {
  static get defaultMessage() {
    return 'The resource could not been found.';
  }

  constructor(message?: string) {
    super(message || NotFoundException.defaultMessage, 404);
  }
}
