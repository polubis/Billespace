import { signIn } from '@billennium/api';
import { useEffect, useMemo, useState } from 'react';
import { Subscription } from 'rxjs';
import { signInSM } from '../state-machines';

export const useSignIn = () => {
  const [stateMachine, setStateMachine] = useState(signInSM);
  const state = stateMachine.get();

  const subs = useMemo(() => new Subscription(), []);

  const handleSignIn = (): void => {
    setStateMachine((prev) => prev.signingIn());

    signIn({ redirectionURL: window.location.href }).subscribe(
      () => {
        setStateMachine((prev) => prev.signedIn());
      },
      (error: string) => {
        setStateMachine((prev) => prev.signInFailed(error));
      }
    );
  };

  useEffect(() => {
    handleSignIn();

    return () => {
      subs.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};
