import axios from 'axios';
import { from } from 'rxjs';
import { URLFactory } from '../config';
import { DeleteOfficePayload } from '../payloads';
import { DeleteOfficeResponse } from '../responses';

const deleteOfficeURL = URLFactory('offices');

const deleteOffice = ({ id }: DeleteOfficePayload) =>
  from(axios.delete<DeleteOfficeResponse>(deleteOfficeURL() + '/' + id));

export { deleteOffice, deleteOfficeURL };
