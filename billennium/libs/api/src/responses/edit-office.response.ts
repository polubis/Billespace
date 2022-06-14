import { OfficeModel } from '../models';
import { Response } from './general';

export type EditOfficeResponse = Response<OfficeModel, 201 | 400 | 401>;
