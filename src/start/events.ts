import User from '../app/Models/User';
import Authentication from '../app/Listeners/Authentication';

const AdonisEvent = use('Event');

AdonisEvent.on('forgot::password', ({ user, token }: { user: User; token: string }) =>
  Authentication.forgotPassword(user, token),
);
