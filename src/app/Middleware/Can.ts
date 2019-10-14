import { Http } from '../../../typings/@adonisjs';

import { PermissionType } from '../Types';
import { ForbiddenException } from '../Exceptions';

class Can {
  public async handle(
    { request, auth }: Http.Context,
    next: () => void,
    permissions: PermissionType | PermissionType[],
  ) {
    const { establishment } = request.params;

    const permission: PermissionType = Array.isArray(permissions) ? permissions[0] : permissions;

    const can = await auth.user.can(establishment, permission);

    if (!can) {
      throw new ForbiddenException();
    }

    next();
  }
}

export = Can;
