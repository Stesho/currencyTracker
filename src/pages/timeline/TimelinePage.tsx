import React, { Component } from 'react';

import { Timeline } from '@/components/timeline/Timeline';
import { getCurrencies } from '@/services/currency/getCurrencies';
import { CurrencyRated } from '@/types/currency';

interface TimelinePageProps {}
interface TimelinePageState {
  currencies: CurrencyRated[];
}

export class TimelinePage extends Component<
  TimelinePageProps,
  TimelinePageState
> {
  constructor(props: TimelinePageProps) {
    super(props);
    this.state = {
      currencies: [],
    };
  }

  componentDidMount() {
    getCurrencies().then((data: CurrencyRated[]) => {
      this.setState({
        currencies: data,
      });
    });
  }

  render() {
    const { currencies } = this.state;

    return (
      <main>
        {currencies.length > 0 && <Timeline currencies={currencies} />}
      </main>
    );
  }
}
