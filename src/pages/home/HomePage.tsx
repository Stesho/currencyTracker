import React from 'react';
import { useSelector } from 'react-redux';

import { CurrencyList } from '@/components/CurrencyList/CurrencyList';
import { Main } from '@/components/Main/Main';
import { NoData } from '@/components/ui/NoData/NoData';
import { stocks } from '@/constants/currencies/stocks';
import { currencySelector } from '@/store/selectors/currency';

export const HomePage = () => {
  const currencyState = useSelector(currencySelector);

  return (
    <Main>
      {currencyState.currencies.length > 0 ? (
        <>
          <CurrencyList title='Stocks' currencies={stocks} />
          <CurrencyList title='Quotes' currencies={currencyState.currencies} />
        </>
      ) : (
        <NoData />
      )}
    </Main>
  );
};
