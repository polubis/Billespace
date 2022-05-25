import axios from 'axios';
import { from, map, Observable } from 'rxjs';
import { pathFactory } from '../config';

const create = pathFactory('accounts', 'sign-in');

interface Payload {
  redirectionUrl: string;
}

const signIn = ({ redirectionUrl }: Payload): Observable<void> =>
  from(
    axios.get<void>(create(), {
      params: { redirectionUrl },
    })
  ).pipe(map(({ data }) => data));
signIn.url = create;

export { signIn };
