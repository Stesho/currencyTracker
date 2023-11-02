import React, { PureComponent } from 'react';
import styles from '@/components/ui/dropdown/DropDown.module.scss';
import IDropDownProps from '@/constants/interfaces/IDropDownProps';

interface IDropDownListProps extends IDropDownProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

class DropDownList extends PureComponent<IDropDownListProps> {
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
