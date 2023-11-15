import React, { PureComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { Main } from '@/components/main/Main';
import { Timeline } from '@/components/timeline/Timeline';
import { RootState } from '@/store/store';

class TimelinePageConnected extends PureComponent<PropsFromRedux> {
  render() {
    const { currencyState } = this.props;
    const { currencies } = currencyState;

    return (
      <Main>
        {currencies.length > 0 && <Timeline currencies={currencies} />}
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
