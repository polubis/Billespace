import { prepare } from '@billennium/api';
import { environment } from './environments/environment';

import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@billennium/domain';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/app';
import { GlobalStyle } from '@billennium/ui';

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
  <>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </>
);
