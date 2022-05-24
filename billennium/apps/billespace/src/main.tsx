import { prepare } from '@billennium/api';
import { environment } from './environments/environment';

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './app/app';

prepare(environment.API);

if (!environment.production) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { worker } = require('./app/mocks/browser');
  worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
