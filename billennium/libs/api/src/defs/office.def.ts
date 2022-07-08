import { object, array, string, number } from 'joi';

export const OfficeDef = {
  address: string().required(),
  postCode: string().required(),
  city: object({
    id: string().required(),
    name: string().required(),
    symbol: string().required(),
  }).required(),
  country: object({
    id: string().required(),
    name: string().required(),
    symbol: string().required(),
  }).required(),
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
      desks: number().required().min(1).max(100),
    })
  ),
  officeMapUrl: string(),
};
