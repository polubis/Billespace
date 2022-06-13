import axios from 'axios';
import { from, map, Observable } from 'rxjs';
import { pathFactory } from '../config';
import { OfficeModel } from '../models';
import { CreateOfficePayload } from '../payloads';

const createOfficeUrl = pathFactory('offices');

const createOffice = (payload: CreateOfficePayload): Observable<OfficeModel> =>
  from(axios.post<OfficeModel>(createOfficeUrl(), payload)).pipe(
    map(({ data }) => data)
  );

export { createOffice, createOfficeUrl };
