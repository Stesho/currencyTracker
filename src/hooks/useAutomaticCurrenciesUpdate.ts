import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrencies } from '@/services/currency/getCurrencies';
import { updateCurrencyStore } from '@/services/currency/updateCurrenciesStore';
import { updateCurrencies } from '@/store/slices/currencySlice';

export const useAutomaticCurrenciesUpdate = (intervalMs: number) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const currencies = localStorage.getItem('persist:root');
    if (!currencies) {
      updateCurrencyStore();
    }

    const intervalId = setInterval(() => {
      getCurrencies().then((data) => {
        dispatch(updateCurrencies(data));
      });
    }, intervalMs);

    return () => clearInterval(intervalId);
  }, []);
};
