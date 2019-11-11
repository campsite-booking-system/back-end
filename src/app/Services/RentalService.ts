import * as service from './Rental';

class RentalService {
  public static getRental = service.getRental;
  public static getRentals = service.getRentals;
  public static getRentalCategories = service.getRentalCategories;
  public static getRentalCategory = service.getRentalCategory;
}

export default RentalService;
