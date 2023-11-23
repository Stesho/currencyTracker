import React, {
  ChangeEvent,
  createRef,
  KeyboardEvent,
  PureComponent,
  RefObject,
} from 'react';

import SearchIcon from '@/assets/icons/search.svg';
import SearchInputList from '@/components/ui/SearchInput/SearchInputList/SearchInputList';
import { CurrencyRated } from '@/types/currency';

import styles from './SearchInput.module.scss';

interface SearchInputProps {
  currencies: CurrencyRated[];
  onSelectCurrency: (currency: CurrencyRated | null) => void;
  className?: string;
  setNotFound: (isNotFound: boolean) => void;
}

interface SearchInputState {
  selectedCurrency: string;
  isOpenList: boolean;
}

export class SearchInput extends PureComponent<
  SearchInputProps,
  SearchInputState
> {
  private readonly searchInputWrapper: RefObject<HTMLDivElement>;

  private readonly searchInput: RefObject<HTMLInputElement>;

  constructor(props: SearchInputProps) {
    super(props);
    this.searchInputWrapper = createRef();
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
    const isClickedOutsideInputWrapper =
      !this.searchInputWrapper.current?.contains(event.target as Node);
    const isInputLostFocus =
      this.searchInput.current !== document.activeElement;

    if (isClickedOutsideInputWrapper && isInputLostFocus) {
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
    const { onSelectCurrency, setNotFound } = this.props;

    this.setState({
      selectedCurrency: currency.currencyName,
    });

    this.closeList();
    setNotFound(false);
    onSelectCurrency(currency);
  };

  onSearchClick = () => {
    const { currencies, onSelectCurrency, setNotFound } = this.props;
    const { selectedCurrency } = this.state;

    const currency = currencies.find(
      (currencyItem) => currencyItem.currencyName === selectedCurrency,
    );

    this.closeList();
    setNotFound(selectedCurrency.length > 0 && !currency);
    onSelectCurrency(currency || null);
  };

  onEnterClick = (event: KeyboardEvent<HTMLInputElement>) => {
    const enterKey = 'Enter';
    const isInputOnFocus = this.searchInput.current === document.activeElement;

    if (event.key === enterKey && isInputOnFocus) {
      this.searchInput.current?.blur();
      this.onSearchClick();
    }
  };

  openList = () => {
    this.setState({
      isOpenList: true,
    });
  };

  closeList = () => {
    this.setState({
      isOpenList: false,
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
        ref={this.searchInputWrapper}
      >
        <div className={styles.inputWrapper}>
          <input
            ref={this.searchInput}
            value={selectedCurrency}
            onChange={this.onInputCurrency}
            onFocus={this.openList}
            onKeyDown={this.onEnterClick}
            placeholder='Currency search...'
          />
          <SearchIcon
            data-testid='currencySearchInput'
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
