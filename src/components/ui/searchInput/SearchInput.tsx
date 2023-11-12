import React, { ChangeEvent, PureComponent } from 'react';

import SearchIcon from '@/assets/icons/search.svg';
import { CurrencyRated } from '@/types/currency';

import styles from './SearchInput.module.scss';

interface SearchInputProps {
  currencies: CurrencyRated[];
}

interface SearchInputState {
  selectedCurrency: string;
  isOpenList: boolean;
}

export class SearchInput extends PureComponent<
  SearchInputProps,
  SearchInputState
> {
  constructor(props: SearchInputProps) {
    super(props);
    this.state = {
      selectedCurrency: '',
      isOpenList: false,
    };
  }

  onInputCurrency = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      selectedCurrency: event.target.value,
    });
  };

  onCurrencyClick = (currency: CurrencyRated) => {
    this.setState({
      selectedCurrency: currency.currencyName,
    });
    this.toggleList();
  };

  toggleList = () => {
    const { isOpenList } = this.state;
    this.setState({
      isOpenList: !isOpenList,
    });
  };

  render() {
    const { selectedCurrency, isOpenList } = this.state;
    const { currencies } = this.props;
    const filteredCurrencies = currencies.filter((currency) =>
      currency.currencyName
        .toLowerCase()
        .includes(selectedCurrency.toLowerCase()),
    );

    return (
      <div className={styles.searchInput}>
        <div className={styles.input}>
          <input
            value={selectedCurrency}
            onChange={this.onInputCurrency}
            onFocus={this.toggleList}
            placeholder='Currency search...'
          />
          <SearchIcon className={styles.searchIcon} />
        </div>
        {isOpenList && (
          <ul className={styles.searchList}>
            {filteredCurrencies.map((currency) => (
              <li
                key={currency.id}
                className={styles.listItem}
                onClick={() => this.onCurrencyClick(currency)}
              >
                {currency.currencyName}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
