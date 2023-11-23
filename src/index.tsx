import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from '@/App';
import { Layout } from '@/components/Layout/Layout';
import { ErrorBoundary } from '@/components/ui/ErrorBoundary/ErrorBoundary';
import { persistor, store } from '@/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App>
            <Layout />
          </App>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
