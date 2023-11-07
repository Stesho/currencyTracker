import React, { Component, RefObject } from 'react';
import Arrow from '@/assets/icons/arrow.svg';
import DropDownList from '@/components/ui/dropdown/dropDownList/DropDownList';
import DropDownProps from '@/constants/interfaces/dropDownProps';
import { Currency, CurrencyRated } from '@/constants/interfaces/currency';
import styles from './DropDown.module.scss';

interface DropDownState {
  isOpen: boolean;
  selectedOption: Currency;
}

class DropDown extends Component<DropDownProps, DropDownState> {
  private readonly dropDown: RefObject<HTMLDivElement>;

  constructor(props: DropDownProps) {
    super(props);
    this.dropDown = React.createRef();
    this.state = {
      isOpen: false,
      selectedOption: props.options[0],
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
    if (!this.dropDown.current?.contains(event.target as Node)) {
      this.setState({ isOpen: false });
    }
  };

  toggleDropDown = () => {
    this.setState((prev) => ({
      isOpen: !prev.isOpen,
    }));
  };

  onOptionClick = (option: CurrencyRated) => {
    const { onSelectOption } = this.props;

    onSelectOption(option);
    this.setState((prev) => ({
      isOpen: !prev.isOpen,
      selectedOption: option,
    }));
  };

  arrowAnimation = () => {
    const { isOpen } = this.state;
    return isOpen ? styles.rotateUp : styles.rotateDown;
  };

  render() {
    const { selectedOption, isOpen } = this.state;
    const { options, onSelectOption } = this.props;

    return (
      <div className={styles.dropDown} ref={this.dropDown}>
        <button
          className={styles.button}
          onClick={this.toggleDropDown}
          type='button'
        >
          <div className={styles.option}>{selectedOption.currencyName}</div>
          <Arrow className={this.arrowAnimation()} />
        </button>
        {isOpen && (
          <DropDownList
            options={options}
            selectedOption={selectedOption}
            onSelectOption={this.onOptionClick}
          />
        )}
      </div>
    );
  }
}

export default DropDown;
