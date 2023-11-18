import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrencies } from '@/services/currency/getCurrencies';
import { updateCurrencies } from '@/store/slices/currencySlice';
import { CurrencyRated } from '@/types/currency';

export const useAutomaticCurrenciesUpdate = (intervalMs: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const currencies = localStorage.getItem('persist:root');
    if (!currencies) {
      getCurrencies().then((data: CurrencyRated[]) => {
        dispatch(updateCurrencies(data || []));
      });
    }

    const intervalId = setInterval(() => {
      getCurrencies().then((data: CurrencyRated[]) => {
        dispatch(updateCurrencies(data || []));
      });
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, []);
};
