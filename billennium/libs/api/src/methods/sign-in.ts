import axios from 'axios';
import { from, map, Observable } from 'rxjs';
import { pathFactory } from '../config';
import { SignInPayload } from '../payloads';

const signInUrl = pathFactory('accounts', 'sign-in');

const signIn = ({ redirectionUrl }: SignInPayload): Observable<null> =>
  from(
    axios.get<null>(signInUrl(), {
      params: { redirectionUrl },
    })
  ).pipe(map(({ data }) => data));

export { signIn, signInUrl };
