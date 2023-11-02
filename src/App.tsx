import React from 'react';
import '@/styles/index.scss';
import Header from '@/components/ui/header/Header';
import Info from '@/components/ui/info/Info';
import TimeUpdate from '@/components/ui/timeUpdate/TimeUpdate';
import CurrencyList from '@/components/ui/currencyList/CurrencyList';
import currencies from '@/constants/currencies/currencies';
import stocks from '@/constants/currencies/stocks';

function App() {
  return (
    <div className='app'>
      <Header />
      <Info />
      <TimeUpdate />
      <CurrencyList title='Stocks' currencies={stocks} />
      <CurrencyList title='Quotes' currencies={currencies} />
    </div>
  );
}

export default App;
