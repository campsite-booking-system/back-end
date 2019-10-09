import Authentication from '../app/Listeners/Authentication';

const AdonisEvent = use('Event');

AdonisEvent.on('forgot::password', ({ user, token }) => Authentication.forgotPassword(user, token));
