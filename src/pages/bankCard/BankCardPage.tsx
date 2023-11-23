import React, { PureComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { BankSearch } from '@/components/BankSearch/BankSearch';
import { Main } from '@/components/Main/Main';
import { Loader } from '@/components/ui/Loader/Loader';
import { NoData } from '@/components/ui/NoData/NoData';
import { RootState } from '@/store/store';

export class BankCardPageConnected extends PureComponent<PropsFromRedux> {
  render() {
    const { currencyState } = this.props;
    const { currencies } = currencyState;

    return (
      <Main>
        <Loader isLoading={currencyState.isFetching}>
          {currencies.length > 0 ? (
            <BankSearch currencies={currencies} />
          ) : (
            <NoData />
          )}
        </Loader>
      </Main>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  currencyState: state.currency,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export const BankCardPage = connector(BankCardPageConnected);
