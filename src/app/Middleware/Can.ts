import { Http } from '../../../typings/@adonisjs';
import { Permissions } from '@vulpee/js-api';

import { ForbiddenException } from '../Exceptions';

class Can {
  public async handle({ request, auth }: Http.Context, next: () => void, permissions: Permissions | Permissions[]) {
    const { establishment } = request.params;

    const can = await auth.user.can(establishment, permissions);

    if (!can) {
      throw new ForbiddenException();
    }

    await next();
  }
}

export = Can;
