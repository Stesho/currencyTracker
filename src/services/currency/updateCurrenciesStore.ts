import { getCurrencies } from '@/services/currency/getCurrencies';
import { setIsFetching, updateCurrencies } from '@/store/slices/currencySlice';
import { store } from '@/store/store';

export const updateCurrencyStore = () => {
  store.dispatch(setIsFetching(true));
  getCurrencies().then((currencies) => {
    store.dispatch(updateCurrencies(currencies));
    store.dispatch(setIsFetching(false));
  });
};
