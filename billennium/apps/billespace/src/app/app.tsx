import { signIn } from '@billennium/api';
import { Ui } from '@billennium/ui';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    signIn({ redirectionUrl: window.location.href }).subscribe();
  }, []);

  return <Ui />
}

export default App;
