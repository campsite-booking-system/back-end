const ForbiddenException = require('../Exceptions/ForbiddenException');

class Is {
  public async handle({ auth }, next, ...args) {
    let expression = args[0];

    if (Array.isArray(expression)) {
      [expression] = expression;
    }

    const is = await auth.user.is(expression);

    if (!is) {
      throw new ForbiddenException();
    }

    await next();
  }
}

export = Is;
