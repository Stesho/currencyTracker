import React, { PureComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { BankSearch } from '@/components/bankSearch/BankSearch';
import { Main } from '@/components/main/Main';
import { NoData } from '@/components/ui/noData/NoData';
import { RootState } from '@/store/store';

export class BankCardPageConnected extends PureComponent<PropsFromRedux> {
  render() {
    const { currencyState } = this.props;
    const { currencies } = currencyState;

    return (
      <Main>
        {currencies.length > 0 ? (
          <BankSearch currencies={currencies} />
        ) : (
          <NoData />
        )}
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
