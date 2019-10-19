import { Exception } from '../../Exceptions';
import AuthenticationService from '../AuthenticationService';

async function logout(this: AuthenticationService): Promise<void> {
  try {
    await this.auth.revokeTokens();
  } catch (error) {
    throw new Exception();
  }
}

export default logout;
