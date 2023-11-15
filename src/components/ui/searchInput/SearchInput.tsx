import React, { ChangeEvent, createRef, PureComponent, RefObject } from 'react';

import SearchIcon from '@/assets/icons/search.svg';
import SearchInputList from '@/components/ui/searchInput/searchInputList/SearchInputList';
import { CurrencyRated } from '@/types/currency';

import styles from './SearchInput.module.scss';

interface SearchInputProps {
  currencies: CurrencyRated[];
  onSelectCurrency: (currency: CurrencyRated | null) => void;
  className?: string;
}

interface SearchInputState {
  selectedCurrency: string;
  isOpenList: boolean;
}

export class SearchInput extends PureComponent<
  SearchInputProps,
  SearchInputState
> {
  private readonly searchInput: RefObject<HTMLDivElement>;

  constructor(props: SearchInputProps) {
    super(props);
    this.searchInput = createRef();
    this.state = {
      selectedCurrency: '',
      isOpenList: false,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.onClickOutside);
    return () => document.removeEventListener('click', this.onClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClickOutside);
  }

  onClickOutside = (event: Event) => {
    if (!this.searchInput.current?.contains(event.target as Node)) {
      this.setState({
        isOpenList: false,
      });
    }
  };

  onInputCurrency = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      selectedCurrency: event.target.value,
    });
  };

  onCurrencyClick = (currency: CurrencyRated) => {
    const { onSelectCurrency } = this.props;

    this.setState({
      selectedCurrency: currency.currencyName,
    });

    this.toggleList();
    onSelectCurrency(currency);
  };

  onSearchClick = () => {
    const { currencies, onSelectCurrency } = this.props;
    const { selectedCurrency } = this.state;

    const currency = currencies.find(
      (currencyItem) => currencyItem.currencyName === selectedCurrency,
    );

    this.toggleList();
    onSelectCurrency(currency || null);
  };

  toggleList = () => {
    const { isOpenList } = this.state;
    this.setState({
      isOpenList: !isOpenList,
    });
  };

  render() {
    const { selectedCurrency, isOpenList } = this.state;
    const { currencies, className } = this.props;
    const filteredCurrencies = currencies.filter((currency) =>
      currency.currencyName
        .toLowerCase()
        .includes(selectedCurrency.toLowerCase()),
    );

    return (
      <div
        className={`${styles.searchInput} ${className}`}
        ref={this.searchInput}
      >
        <div className={styles.inputWrapper}>
          <input
            value={selectedCurrency}
            onChange={this.onInputCurrency}
            onFocus={this.toggleList}
            placeholder='Currency search...'
          />
          <SearchIcon
            className={styles.searchIcon}
            onClick={this.onSearchClick}
          />
        </div>
        {isOpenList && (
          <SearchInputList
            currencies={filteredCurrencies}
            onCurrencyClick={this.onCurrencyClick}
          />
        )}
      </div>
    );
  }
}
