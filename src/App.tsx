import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrencies } from '@/services/currency/getCurrencies';
import { updateCurrencies } from '@/store/slices/currencySlice';
import { CurrencyRated } from '@/types/currency';

import '@/styles/index.scss';

interface AppProps {
  children: ReactNode;
}

export const App = ({ children }: AppProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const currencies = localStorage.getItem('persist:root');
    if (!currencies) {
      getCurrencies().then((data: CurrencyRated[]) => {
        dispatch(updateCurrencies(data));
      });
    }

    const intervalTimeMs = 20 * 60 * 1000;
    const intervalId = setInterval(() => {
      getCurrencies().then((data: CurrencyRated[]) => {
        dispatch(updateCurrencies(data));
      });
    }, intervalTimeMs);

    return () => clearInterval(intervalId);
  }, []);

  return <div className='app'>{children}</div>;
}
