import { ValidationException } from '../../../Exceptions';

const Antl = use('Antl');
const EstablishmentToken = use('App/Models/EstablishmentToken');

async function tokenNameIsUnique(name: string, establishmentId: number): Promise<void> {
  const tokens = await EstablishmentToken.query()
    .where('establishment_id', establishmentId)
    .where('name', name)
    .fetch();

  if (tokens.rows.length > 0) {
    throw new ValidationException({
      message: Antl.formatMessage('errors.uniqueEstablishmentTokenName'),
      field: 'name',
      validation: 'unique',
    });
  }
}

export default tokenNameIsUnique;
