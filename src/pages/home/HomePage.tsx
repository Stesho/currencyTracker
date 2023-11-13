import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { CurrencyList } from '@/components/currencyList/CurrencyList';
import { stocks } from '@/constants/currencies/stocks';
import { getCurrencies } from '@/services/currency/getCurrencies';
import { updateCurrencies } from '@/store/slices/currencySlice';
import { CurrencyRated } from '@/types/currency';

export function HomePage() {
  const [currencies, setCurrencies] = useState<CurrencyRated[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getCurrencies().then((data: CurrencyRated[]) => {
      setCurrencies(data);
      dispatch(updateCurrencies(data));
    });
  }, []);

  return (
    <main>
      <CurrencyList title='Stocks' currencies={stocks} />
      <CurrencyList title='Quotes' currencies={currencies} />
    </main>
  );
}
