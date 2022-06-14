import { Response } from './general';

export type SignInResponse = Response<null, 200 | 300 | 400>;
