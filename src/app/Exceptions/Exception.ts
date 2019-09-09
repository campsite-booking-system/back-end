import { HttpException } from '@adonisjs/generic-exceptions';

const Logger = use('Logger');

export default class Exception extends HttpException {
  static get defaultMessage() {
    return 'Something went wrong on our side, please contact our support.';
  }

  constructor(message?: string) {
    super(Exception.defaultMessage, 500);

    if (message) {
      Logger.crit(message);
    }
  }
}
