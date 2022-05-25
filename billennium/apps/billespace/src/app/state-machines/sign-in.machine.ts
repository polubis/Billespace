/* eslint-disable @typescript-eslint/no-empty-function */
import { SM } from '@billennium/sm';

export const signInSM = SM(
  {
    idle: () => {},
    signingIn: () => {},
    signedIn: () => {},
    signInFailed: (error: string) => error,
  },
  { key: 'idle' }
)({
  idle: 'signedIn',
  signingIn: ['signedIn', 'signInFailed'],
  signedIn: 'idle',
  signInFailed: 'idle',
});
