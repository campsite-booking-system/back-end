import * as service from './Accommodation';

class AccommodationService {
  public static getAccommodation = service.getAccommodation;
  public static getAccommodations = service.getAccommodations;
  public static getAccommodationCategories = service.getAccommodationCategories;
  public static getAccommodationCategory = service.getAccommodationCategory;
}

export default AccommodationService;
