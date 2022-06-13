export interface CreateOfficePayload {
  country: string;
  city: string;
  address: string;
  postCode: string;
  officeZones: { name: string; desks: number }[];
  parkingZones: { name: string; spaces: number }[] | null;
  officeMap: File | null;
}
