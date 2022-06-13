import axios from 'axios';
import { from } from 'rxjs';
import { pathFactory } from '../config';
import { SignInPayload } from '../payloads';
import { SignInResponse } from '../responses';

const signInUrl = pathFactory('accounts', 'sign-in');

const signIn = ({ redirectionUrl }: SignInPayload) =>
  from(
    axios.get<SignInResponse>(signInUrl(), {
      params: { redirectionUrl },
    })
  );

export { signIn, signInUrl };
