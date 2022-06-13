import axios from 'axios';
import { from } from 'rxjs';
import { pathFactory } from '../config';
import { CreateOfficePayload } from '../payloads';
import { CreateOfficeResponse } from '../responses';

const createOfficeUrl = pathFactory('offices');

const createOffice = (payload: CreateOfficePayload) =>
  from(axios.post<CreateOfficeResponse>(createOfficeUrl(), payload));

export { createOffice, createOfficeUrl };
