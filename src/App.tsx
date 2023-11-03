import React from 'react';
import '@/styles/index.scss';
import Header from '@/components/ui/header/Header';
import Info from '@/components/ui/info/Info';
import TimeUpdate from '@/components/ui/timeUpdate/TimeUpdate';
import CurrencyList from '@/components/ui/currencyList/CurrencyList';
import Footer from '@/components/ui/footer/Footer';
import currencies from '@/constants/currencies/currencies';
import stocks from '@/constants/currencies/stocks';
import DropDown from '@/components/ui/dropdown/DropDown';
import Input from '@/components/ui/input/Input';

function App() {
  return (
    <div className='app'>
      <Header />
      <Info />
      <TimeUpdate />
      <div className='container'>
        <Input />
        <DropDown options={['Dollar', 'Euro', 'Bitcoin', 'Yen']} />
      </div>
      <CurrencyList title='Stocks' currencies={stocks} />
      <CurrencyList title='Quotes' currencies={currencies} />
      <Footer />
    </div>
  );
}

export default App;
