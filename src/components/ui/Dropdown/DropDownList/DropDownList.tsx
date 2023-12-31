import React, { PureComponent } from 'react';

import { DropDownProps } from '@/components/ui/Dropdown/interfaces';
import { Currency, CurrencyRated } from '@/types/currency';

import styles from './DropDownList.module.scss';

interface DropDownListProps extends DropDownProps {
  selectedOption: Currency | null;
}

export class DropDownList extends PureComponent<DropDownListProps> {
  onSelectOption = (option: CurrencyRated) => () => {
    const { onSelectOption } = this.props;
    onSelectOption(option);
  };

  render() {
    const { options, selectedOption } = this.props;

    return (
      <ul className={`${styles.dropDownList} scrollBar`}>
        {options.map(
          (option) =>
            option.id !== (selectedOption && selectedOption.id) && (
              <li
                data-cy='dropDownOption'
                key={option.id}
                onClick={this.onSelectOption(option)}
                className={styles.option}
              >
                {option.currencyName}
              </li>
            ),
        )}
      </ul>
    );
  }
}
