import React, { PureComponent } from 'react';

import { Map } from '@/components/ui/map/Map';
import { SearchInput } from '@/components/ui/searchInput/SearchInput';
import { CurrencyRated } from '@/types/currency';

import styles from './BankSearch.module.scss';

interface CurrencySearchProps {
  currencies: CurrencyRated[];
}
interface CurrencySearchState {
  selectedCurrency: CurrencyRated | null;
}

export class BankSearch extends PureComponent<
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
      <section className={styles.bankSearch}>
        <div className={`${styles.searchInput} container`}>
          <h2 className={styles.header}>Search currency in the bank</h2>
          <SearchInput
            currencies={currencies}
            onSelectCurrency={this.onSelectCurrency}
            className={styles.input}
          />
        </div>
        <Map selectedCurrency={selectedCurrency} />
      </section>
    );
  }
}
