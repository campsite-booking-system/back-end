import * as rental from './Rental';

class RentalService {
  public static getRental = rental.getRental;
  public static getRentals = rental.getRentals;
  public static getRentalCategories = rental.getRentalCategories;
  public static getRentalCategory = rental.getRentalCategory;
}

export default RentalService;
