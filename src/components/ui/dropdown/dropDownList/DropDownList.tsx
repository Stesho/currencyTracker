import React, { PureComponent } from 'react';
import styles from '@/components/ui/dropdown/DropDown.module.scss';
import DropDownProps from '@/constants/interfaces/dropDownProps';

interface DropDownListProps extends DropDownProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

class DropDownList extends PureComponent<DropDownListProps> {
  render() {
    const { options, selectedOption, setSelectedOption } = this.props;

    return (
      <ul className={styles.dropDownList}>
        {options.map(
          (option) =>
            option !== selectedOption && (
              <li
                key={option}
                onClick={() => setSelectedOption(option)}
                className={styles.option}
              >
                {option}
              </li>
            ),
        )}
      </ul>
    );
  }
}

export default DropDownList;
