import { logIn } from '@billennium/api';
import { useEffect } from 'react';
import NxWelcome from './nx-welcome';

export function App() {
  useEffect(() => {
    logIn({ redirectionUrl: window.location.href }).subscribe();
  }, []);

  return <NxWelcome title="billespace" />;
}

export default App;
