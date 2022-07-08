import { OfficeZoneModel, ParkingZoneModel } from '../models';

export interface CreateOfficePayload {
  country: string;
  city: string;
  address: string;
  postCode: string;
  officeZones: OfficeZoneModel[];
  parkingZones?: ParkingZoneModel[];
  officeMap?: File;
}
