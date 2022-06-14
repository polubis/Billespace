import axios from 'axios';
import { from } from 'rxjs';
import { URLFactory } from '../config';
import { EditOfficePayload } from '../payloads';
import { EditOfficeResponse } from '../responses';

const editOfficeURL = URLFactory('offices');

const editOffice = ({ id, ...payload }: EditOfficePayload) =>
  from(axios.put<EditOfficeResponse>(editOfficeURL() + '/' + id, payload));

export { editOffice, editOfficeURL };
