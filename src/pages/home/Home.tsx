import React, { useEffect, useState } from 'react';
import Info from '@/components/ui/info/Info';
import TimeUpdate from '@/components/ui/timeUpdate/TimeUpdate';
import CurrencyList from '@/components/ui/currencyList/CurrencyList';
import stocks from '@/constants/currencies/stocks';
import CurrencyCardProps from '@/constants/interfaces/currencyCardProps';
import getCurrencies from '@/services/currency/getCurrencies';

function Home() {
  const [currencies, setCurrencies] = useState<CurrencyCardProps[]>([]);

  useEffect(() => {
    getCurrencies().then((data: CurrencyCardProps[]) => {
      setCurrencies(data);
    });
  }, []);

  return (
    <main>
      <Info />
      <TimeUpdate />
      <CurrencyList title='Stocks' currencies={stocks} />
      <CurrencyList title='Quotes' currencies={currencies} />
    </main>
  );
}

export default Home;
