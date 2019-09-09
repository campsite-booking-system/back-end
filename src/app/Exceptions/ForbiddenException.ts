import { HttpException } from '@adonisjs/generic-exceptions';

export default class ForbiddenException extends HttpException {
  static get defaultMessage() {
    return 'Access forbidden. You are not allowed to access this resource.';
  }

  constructor(message?: string) {
    super(message || ForbiddenException.defaultMessage, 403);
  }
}
