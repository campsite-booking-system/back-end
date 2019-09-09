import { AuthErrors } from '../../../../Constants/Errors';
import { Exception } from '../../../../Exceptions';

const { validate } = use('Validator');

const User = use('App/Models/User');

class AuthController {
  public async signIn({ request, response, auth }) {
    const rules = {
      email: 'required|email',
      password: 'required',
    };

    const { email, password } = request.only(['email', 'password']);

    const validation = await validate({ email, password }, rules);

    if (!validation.fails()) {
      try {
        return await auth.attempt(email, password);
      } catch (error) {
        return response.status(400).send({ error: AuthErrors.INVALID_LOGIN });
      }
    }

    return response.status(400).send(validation.messages());
  }

  public async register({ request, response, auth }) {
    const rules = {
      email: 'required|email|unique:users,email',
      firstName: 'required',
      lastName: 'required',
      password: 'required',
    };

    const { email, firstName, lastName, password } = request.only([
      'email',
      'firstName',
      'lastName',
      'password',
    ]);

    const validation = await validate({ email, firstName, lastName, password }, rules);

    if (!validation.fails()) {
      try {
        const user = await User.create({
          email,
          first_name: firstName,
          last_name: lastName,
          password,
        });
        const token = await auth.generate(user);

        return response.status(201).send(token);
      } catch (error) {
        throw new Exception(error);
      }
    }

    return response.status(400).send(validation.messages());
  }
}

export = AuthController;
