import React, { PureComponent } from 'react';

import { DropDownProps } from '@/components/ui/dropdown/interfaces';
import { Currency } from '@/types/currency';

import styles from './DropDownList.module.scss';

interface DropDownListProps extends DropDownProps {
  selectedOption: Currency;
}

export class DropDownList extends PureComponent<DropDownListProps> {
  render() {
    const { options, selectedOption, onSelectOption } = this.props;

    return (
      <ul className={styles.dropDownList}>
        {options.map(
          (option) =>
            option.id !== selectedOption.id && (
              <li
                key={option.id}
                onClick={() => onSelectOption(option)}
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
