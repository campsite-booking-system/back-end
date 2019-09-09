const ForbiddenException = require('../Exceptions/ForbiddenException');

class Can {
  public async handle({ request, auth }, next, properties) {
    let property;

    if (Array.isArray(properties)) {
      [property] = properties;
    }

    const can = await auth.user.can(request.params.establishment, property);

    if (!can) {
      throw new ForbiddenException();
    }

    await next();
  }
}

export = Can;
