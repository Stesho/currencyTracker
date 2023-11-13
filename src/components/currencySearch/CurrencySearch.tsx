import React, { PureComponent } from 'react';

import { Map } from '@/components/ui/map/Map';
import { SearchInput } from '@/components/ui/searchInput/SearchInput';
import { CurrencyRated } from '@/types/currency';

interface CurrencySearchProps {
  currencies: CurrencyRated[];
}
interface CurrencySearchState {
  selectedCurrency: CurrencyRated | null;
}

export class CurrencySearch extends PureComponent<
  CurrencySearchProps,
  CurrencySearchState
> {
  constructor(props: CurrencySearchProps) {
    super(props);
    this.state = {
      selectedCurrency: null,
    };
  }

  onSelectCurrency = (currency: CurrencyRated | null) => {
    this.setState({
      selectedCurrency: currency,
    });
  };

  render() {
    const { currencies } = this.props;
    const { selectedCurrency } = this.state;

    return (
      <section className='container'>
        <h2>Search currency in the bank</h2>
        <SearchInput
          currencies={currencies}
          onSelectCurrency={this.onSelectCurrency}
        />
        <Map selectedCurrency={selectedCurrency} />
      </section>
    );
  }
}
