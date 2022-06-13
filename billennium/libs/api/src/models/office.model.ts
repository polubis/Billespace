import { Id } from './general';

export interface CountryModel {
  id: Id;
  name: string;
  symbol: string;
}

export interface CityModel {
  id: Id;
  name: string;
  symbol: string;
}

export interface OfficeZoneModel {
  name: string;
  desks: number;
}

export interface ParkingZoneModel {
  name: string;
  spaces: number;
}

export interface OfficeModel {
  country: CountryModel;
  city: CityModel;
  address: string;
  postCode: string;
  officeZones: OfficeZoneModel[];
  parkingZones: ParkingZoneModel[] | null;
  officeMapUrl: string | null;
}
