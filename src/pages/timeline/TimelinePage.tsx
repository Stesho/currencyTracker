import React, { PureComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { Main } from '@/components/Main/Main';
import { Timeline } from '@/components/Timeline/Timeline';
import { NoData } from '@/components/ui/NoData/NoData';
import { RootState } from '@/store/store';

class TimelinePageConnected extends PureComponent<PropsFromRedux> {
  render() {
    const { currencyState } = this.props;
    const { currencies } = currencyState;

    return (
      <Main>
        {currencies.length > 0 ? (
          <Timeline currencies={currencies} />
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

export const TimeLinePage = connector(TimelinePageConnected);
