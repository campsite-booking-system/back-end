import { HttpException } from '@adonisjs/generic-exceptions';

const Logger = use('Logger');
const Antl = use('Antl');

export default class Exception extends HttpException {
  static get defaultMessage() {
    return Antl.formatMessage('errors.default');
  }

  constructor(message?: string) {
    super(JSON.stringify({ message: Exception.defaultMessage }), 500);

    if (message) {
      Logger.crit(message);
    }
  }
}
