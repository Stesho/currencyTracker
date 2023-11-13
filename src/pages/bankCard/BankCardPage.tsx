import React, { PureComponent } from 'react';

import { CurrencySearch } from '@/components/ui/currencySearch/CurrencySearch';
import { getCurrencies } from '@/services/currency/getCurrencies';
import { CurrencyRated } from '@/types/currency';

interface BankCardPageProps {}
interface BankCardPageState {
  currencies: CurrencyRated[];
}

export class BankCardPage extends PureComponent<
  BankCardPageProps,
  BankCardPageState
> {
  constructor(props: BankCardPageProps) {
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
        {currencies.length > 0 && <CurrencySearch currencies={currencies} />}
      </main>
    );
  }
}
