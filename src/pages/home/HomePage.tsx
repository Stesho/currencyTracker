import React, { useEffect, useState } from 'react';
import Info from '@/components/ui/info/Info';
import CurrencyList from '@/components/ui/currencyList/CurrencyList';
import stocks from '@/constants/currencies/stocks';
import getCurrencies from '@/services/currency/getCurrencies';
import { useDispatch } from 'react-redux';
import { updateCurrencies } from '@/store/slices/currencySlice';
import { CurrencyRated } from '@/constants/interfaces/currency';

function HomePage() {
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

export default HomePage;
