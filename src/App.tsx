import React, { ReactNode } from 'react';

import { CURRENCIES_UPDATE_INTERVAL_MINUTES } from '@/constants/environment/environment';
import { useAutomaticCurrenciesUpdate } from '@/hooks/useAutomaticCurrenciesUpdate';

import '@/styles/index.scss';

interface AppProps {
  children: ReactNode;
}

const intervalTimeMs = CURRENCIES_UPDATE_INTERVAL_MINUTES * 60 * 1000;

export const App = ({ children }: AppProps) => {
  useAutomaticCurrenciesUpdate(intervalTimeMs);

  return <div className='app'>{children}</div>;
};
