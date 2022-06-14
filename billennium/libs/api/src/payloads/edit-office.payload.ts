import { Id, OfficeZoneModel, ParkingZoneModel } from '../models';

export interface EditOfficePayload {
  id: Id;
  country: string;
  city: string;
  address: string;
  postCode: string;
  officeZones: OfficeZoneModel[];
  parkingZones?: ParkingZoneModel[];
  officeMap?: File;
}
