import { Ui } from '@billennium/ui';
import { useSignIn } from './facades';

export function App() {
  const state = useSignIn();

  return (
    <>
      <Ui />
      {state.key === 'signingIn' && 'Loading...'}
    </>
  );
}

export default App;
