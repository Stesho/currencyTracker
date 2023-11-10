import React, { Component } from 'react';
import { CurrencyRated } from '@/constants/interfaces/currency';
import getCurrencies from '@/services/currency/getCurrencies';
import Timeline from '@/components/timeline/Timeline';

interface TimelinePageProps {}
interface TimelinePageState {
  currencies: CurrencyRated[];
}

class TimelinePage extends Component<TimelinePageProps, TimelinePageState> {
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

export default TimelinePage;
