import React from 'react';
import { useSelector } from 'react-redux';

import { CurrencyList } from '@/components/currencyList/CurrencyList';
import { Main } from '@/components/main/Main';
import { stocks } from '@/constants/currencies/stocks';
import { RootState } from '@/store/store';

export const HomePage = () => {
  const currencyState = useSelector((state: RootState) => state.currency);

  return (
    <Main>
      <CurrencyList title='Stocks' currencies={stocks} />
      <CurrencyList title='Quotes' currencies={currencyState.currencies} />
    </Main>
  );
};
