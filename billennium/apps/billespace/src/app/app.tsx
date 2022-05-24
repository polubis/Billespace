import { logIn } from '@billennium/api';
import { Ui } from '@billennium/ui';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    logIn({ redirectionUrl: window.location.href }).subscribe();
  }, []);

  return <Ui />
}

export default App;
