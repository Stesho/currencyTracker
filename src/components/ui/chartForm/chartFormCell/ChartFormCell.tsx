import React, { ChangeEvent } from 'react';
import styles from '@/components/ui/chartForm/ChartForm.module.scss';

interface ChartFormCellProps {
  value: number;
  position: {
    row: number;
    column: number;
  };
  onChange: (value: number, row: number, column: number) => void;
}

function ChartFormCell({ value, onChange, position }: ChartFormCellProps) {
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value), position.row, position.column);
  };

  return (
    <td className={styles.cell}>
      <input type='number' value={value} onChange={onChangeValue} />
    </td>
  );
}

export default ChartFormCell;
