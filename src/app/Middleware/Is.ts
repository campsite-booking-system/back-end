import { Http } from '../../../typings/@adonisjs';
import { RoleType } from '@vulpee/js-api';

import { ForbiddenException } from '../Exceptions';

class Is {
  public async handle({ request, auth }: Http.Context, next: () => void, roles: RoleType | RoleType[]) {
    const { establishment } = request.params;

    const role: RoleType = Array.isArray(roles) ? roles[0] : roles;

    const is = await auth.user.is(establishment, role);

    if (!is) {
      throw new ForbiddenException();
    }

    await next();
  }
}

export = Is;
