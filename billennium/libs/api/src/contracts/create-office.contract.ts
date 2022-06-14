import { object, array, string, number } from 'joi';
import { OfficeDef, OfficePayloadDef } from '../defs';

export const CreateOfficeContract = {
  PAYLOAD: object(OfficePayloadDef),
  RESPONSE: object({
    code: number().valid(201, 400, 401, 500).required(),
    errors: array().items(string()).required(),
    data: object(OfficeDef).allow(null).required(),
  }),
};
