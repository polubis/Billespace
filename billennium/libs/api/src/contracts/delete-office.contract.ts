import { object, array, string, number, any } from 'joi';

export const DeleteOfficeContract = {
  PAYLOAD: number(),
  RESPONSE: object({
    code: number().valid(200, 400, 401, 500).required(),
    errors: array().items(string()).required(),
    data: any().valid(null).required(),
  }),
};
