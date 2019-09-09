import { BaseModel } from '.';

export default interface IEstablishment extends BaseModel {
  id: number;
  name: string;
  slug: string;
  address: string;
  complementary_address: string;
  zip_code: string;
  city: string;
  country: string;
  longitude: number;
  latitude: number;
}
