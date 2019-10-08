const BaseExceptionHandler = use('BaseExceptionHandler');
const Logger = use('Logger');
// const Bugsnag = use('Bugsnag');

class ExceptionHandler extends BaseExceptionHandler {
  public async handle(error, { response }) {
    response.status(error.status).send({ error: JSON.parse(error.message) });
  }

  public async report(error, { request }) {
    if (error.name === 'FetchError' || error.name === 'TypeError' || error.name === 'Exception') {
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
