import { CityModel } from './city.model';
import { CountryModel } from './country.model';
import { OfficeZoneModel } from './office-zone.model';
import { ParkingZoneModel } from './parking-zone.model';

export interface OfficeModel {
  country: CountryModel;
  city: CityModel;
  address: string;
  postCode: string;
  officeZones: OfficeZoneModel[];
  parkingZones?: ParkingZoneModel[];
  officeMapUrl?: string;
}
