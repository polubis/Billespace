import { object, array, string, number, any } from 'joi';

export const SignInContract = {
  PAYLOAD: object({
    redirectionURL: string().required(),
  }),
  RESPONSE: object({
    code: number().valid(200, 300, 400).required(),
    errors: array().items(string()).required(),
    data: any().valid(null).required(),
  }),
};
