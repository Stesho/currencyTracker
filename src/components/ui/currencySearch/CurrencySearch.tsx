import React, { PureComponent } from 'react';

import { Map } from '@/components/ui/map/Map';
import { SearchInput } from '@/components/ui/searchInput/SearchInput';
import { CurrencyRated } from '@/types/currency';

interface CurrencySearchProps {
  currencies: CurrencyRated[];
}

export class CurrencySearch extends PureComponent<CurrencySearchProps> {
  render() {
    const { currencies } = this.props;

    return (
      <section className='container'>
        <h2>Search currency in the bank</h2>
        <SearchInput currencies={currencies} />
        <Map />
      </section>
    );
  }
}
