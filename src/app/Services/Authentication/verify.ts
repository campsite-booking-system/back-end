import { UnauthorizedException } from '../../Exceptions';
import AuthenticationService from '../AuthenticationService';

async function verify(this: AuthenticationService): Promise<void> {
  try {
    await this.auth.check();
  } catch (error) {
    throw new UnauthorizedException();
  }
}

export default verify;
