import axios from 'axios';
import { from, map, Observable } from 'rxjs';
import { pathFactory } from '../config';

const create = pathFactory('accounts', 'log-in');

interface Payload {
  redirectionUrl: string;
}

const logIn = ({ redirectionUrl }: Payload): Observable<void> =>
  from(
    axios.get<void>(create(), {
      params: { redirectionUrl },
    })
  ).pipe(map(({ data }) => data));
logIn.url = create;

export { logIn };
