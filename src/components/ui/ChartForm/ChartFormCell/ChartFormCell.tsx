import React from 'react';

import styles from '@/components/ui/ChartForm/ChartForm.module.scss';
import { NumberInput } from '@/components/ui/NumberInput/NumberInput';

interface ChartFormCellProps {
  value: number;
  position: {
    row: number;
    column: number;
  };
  onChange: (value: number, row: number, column: number) => void;
}

export const ChartFormCell = ({
  value,
  onChange,
  position,
}: ChartFormCellProps) => {
  const onChangeValue = (newValue: number) => {
    onChange(newValue, position.row, position.column);
  };

  return (
    <td className={styles.cell}>
      <NumberInput
        initialValue={value}
        value={value}
        setValue={onChangeValue}
      />
    </td>
  );
};
