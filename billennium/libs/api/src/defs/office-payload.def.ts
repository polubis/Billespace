import { object, array, string, number } from 'joi';

export const OfficePayloadDef = {
  country: string().required(),
  city: string().required(),
  address: string().required(),
  postCode: string().required(),
  officeZones: array()
    .items(
      object({
        name: string().required().min(1).max(30),
        desks: number().required().min(1).max(100),
      })
    )
    .required(),
  parkingZones: array().items(
    object({
      name: string().required().min(1).max(30),
      spaces: number().required().min(1).max(100),
    })
  ),
  officeMap: object(),
};
