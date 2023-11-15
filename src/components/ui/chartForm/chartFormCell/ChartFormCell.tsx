import React from 'react';

import styles from '@/components/ui/chartForm/ChartForm.module.scss';
import { NumberInput } from '@/components/ui/numberInput/NumberInput';

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
      <NumberInput value={value} setValue={onChangeValue} />
    </td>
  );
};
