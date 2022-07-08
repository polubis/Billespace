import { OfficeModel } from '../models';
import { Response } from './general';

export type CreateOfficeResponse = Response<OfficeModel, 201 | 400 | 401>;
