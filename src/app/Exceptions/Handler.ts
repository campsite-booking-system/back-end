import { Http } from '../../../typings/@adonisjs';

import { Exception, UnauthorizedException } from '.';

const BaseExceptionHandler = use('BaseExceptionHandler');
const Logger = use('Logger');
// const Bugsnag = use('Bugsnag');

class ExceptionHandler extends BaseExceptionHandler {
  public async handle(error: any, { response }: Http.Context) {
    if (error.name === 'HttpException' || error.name === 'TypeError') {
      response.status(500).send({ error: { message: Exception.defaultMessage } });
    } else if (error.name === 'InvalidJwtToken') {
      response.status(401).send({ error: { message: UnauthorizedException.defaultMessage } });
    } else {
      response.status(error.status).send({ error: JSON.parse(error.message) });
    }
  }

  public async report(error: any, { request }: Http.Context) {
    if (
      error.name === 'FetchError' ||
      error.name === 'TypeError' ||
      error.name === 'Exception' ||
      error.name === 'HttpException'
    ) {
      Logger.crit(error.message, error);

      // if (Bugsnag) {
      //   Bugsnag.notify(error, {
      //     data: request.all(),
      //     headers: request.headers(),
      //   });
      // }
    }
  }
}

export = ExceptionHandler;
