import * as service from './EstablishmentToken';

class EstablishmentTokenService {
  public static getEstablishmentTokens = service.getEstablishmentTokens;
  public static createEstablishmentToken = service.createEstablishmentToken;
  public static updateEstablishmentToken = service.updateEstablishmentToken;
  public static regenerateEstablishmentToken = service.regenerateEstablishmentToken;
  public static deleteEstablishmentToken = service.deleteEstablishmentToken;
}

export default EstablishmentTokenService;
