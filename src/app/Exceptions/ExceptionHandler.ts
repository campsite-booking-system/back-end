const BaseExceptionHandler = use('BaseExceptionHandler');

const bugsnag = use('Bugsnag');

class ExceptionHandler extends BaseExceptionHandler {
  public async handle(error, { response }) {
    console.log('hello world');
    response.status(error.status).send(error.message);
  }

  public async report(error, { request }) {
    if (bugsnag) {
      bugsnag.notify(error, {
        data: request.all(),
        headers: request.headers(),
      });
    }
  }
}

export = ExceptionHandler;
