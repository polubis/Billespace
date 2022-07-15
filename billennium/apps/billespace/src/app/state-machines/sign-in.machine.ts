/* eslint-disable @typescript-eslint/no-empty-function */
import { StateMachine } from '@billennium/state-machine';

export const signInSM = StateMachine(
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