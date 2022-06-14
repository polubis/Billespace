import axios from 'axios';
import { from } from 'rxjs';
import { URLFactory } from '../config';
import { CreateOfficePayload } from '../payloads';
import { CreateOfficeResponse } from '../responses';

const createOfficeURL = URLFactory('offices');

const createOffice = (payload: CreateOfficePayload) =>
  from(axios.post<CreateOfficeResponse>(createOfficeURL(), payload));

export { createOffice, createOfficeURL };
