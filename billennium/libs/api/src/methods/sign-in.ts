import axios from 'axios';
import { from } from 'rxjs';
import { URLFactory } from '../config';
import { SignInPayload } from '../payloads';
import { SignInResponse } from '../responses';

const signInURL = URLFactory('accounts', 'sign-in');

const signIn = ({ redirectionURL }: SignInPayload) =>
  from(
    axios.get<SignInResponse>(signInURL(), {
      params: { redirectionURL },
    })
  );

export { signIn, signInURL };
