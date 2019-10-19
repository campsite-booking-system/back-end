import { Http } from '../../../typings/@adonisjs';
import { PermissionType } from '../Types';

const ForbiddenException = require('../Exceptions/ForbiddenException');

class Can {
  public async handle({ request, auth }: Http.Context, next: () => void, properties: PermissionType[]) {
    const property: PermissionType = properties[0];
    const { establishment } = request.params;

    const user = auth.user;

    const can = await user.can(establishment, property);

    if (!can) {
      throw new ForbiddenException();
    }

    next();
  }
}

export = Can;
