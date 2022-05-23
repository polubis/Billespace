import { useEffect } from 'react';
import { environment } from '../environments/environment';
import NxWelcome from './nx-welcome';

export function App() {
  useEffect(() => {
    return () => {
      console.log(environment.API);
      fetch(environment.API + '/login')
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
        });
    };
  }, []);

  return <NxWelcome title="billespace" />;
}

export default App;
