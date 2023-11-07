import React, { PureComponent } from 'react';
import styles from '@/components/ui/dropdown/DropDown.module.scss';
import DropDownProps from '@/constants/interfaces/dropDownProps';
import { Currency } from '@/constants/interfaces/currency';

interface DropDownListProps extends DropDownProps {
  selectedOption: Currency;
}

class DropDownList extends PureComponent<DropDownListProps> {
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

export default DropDownList;
