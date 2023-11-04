import React from 'react';
import Info from '@/components/ui/info/Info';
import TimeUpdate from '@/components/ui/timeUpdate/TimeUpdate';
import CurrencyList from '@/components/ui/currencyList/CurrencyList';
import currencies from '@/constants/currencies/currencies';
import stocks from '@/constants/currencies/stocks';

function Home() {
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
