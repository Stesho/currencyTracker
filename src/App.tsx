import React, { ReactNode } from 'react';

import { useAutomaticCurrenciesUpdate } from '@/hooks/useAutomaticCurrenciesUpdate';

import '@/styles/index.scss';

interface AppProps {
  children: ReactNode;
}

export const App = ({ children }: AppProps) => {
  const intervalTimeMinutes = 20;
  const intervalTimeMs = intervalTimeMinutes * 60 * 1000;

  useAutomaticCurrenciesUpdate(intervalTimeMs);

  return <div className='app'>{children}</div>;
};
