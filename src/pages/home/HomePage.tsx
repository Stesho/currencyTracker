import React from 'react';
import { useSelector } from 'react-redux';

import { CurrencyList } from '@/components/CurrencyList/CurrencyList';
import { Main } from '@/components/Main/Main';
import { Loader } from '@/components/ui/Loader/Loader';
import { NoData } from '@/components/ui/NoData/NoData';
import { stocks } from '@/constants/currencies/stocks';
import { currencySelector } from '@/store/selectors/currencySelector';

export const HomePage = () => {
  const currencyState = useSelector(currencySelector);

  return (
    <Main>
      <Loader isLoading={currencyState.isFetching}>
        {currencyState.currencies.length > 0 ? (
          <>
            <CurrencyList title='Stocks' currencies={stocks} />
            <CurrencyList
              title='Quotes'
              currencies={currencyState.currencies}
            />
          </>
        ) : (
          <NoData />
        )}
      </Loader>
    </Main>
  );
};
