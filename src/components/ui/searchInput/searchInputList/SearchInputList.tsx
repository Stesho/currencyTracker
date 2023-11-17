import React, { PureComponent } from 'react';

import styles from '@/components/ui/searchInput/SearchInput.module.scss';
import { CurrencyRated } from '@/types/currency';

interface SearchInputListProps {
  currencies: CurrencyRated[];
  onCurrencyClick: (currency: CurrencyRated) => void;
}

class SearchInputList extends PureComponent<SearchInputListProps> {
  render() {
    const { currencies, onCurrencyClick } = this.props;

    return (
      <ul className={`${styles.searchList} scrollBar`}>
        {currencies.map((currency) => (
          <li
            key={currency.id}
            className={styles.listItem}
            onClick={() => onCurrencyClick(currency)}
          >
            {currency.currencyName}
          </li>
        ))}
      </ul>
    );
  }
}

export default SearchInputList;
