import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from '@/App';
import { Layout } from '@/components/layout/Layout';
import { ErrorBoundary } from '@/components/ui/errorBoundary/ErrorBoundary';
import { store } from '@/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App>
          <Layout />
        </App>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
);
