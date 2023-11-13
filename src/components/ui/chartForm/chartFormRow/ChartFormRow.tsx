import React from 'react';

import styles from '@/components/ui/chartForm/ChartForm.module.scss';
import { ChartFormCell } from '@/components/ui/chartForm/chartFormCell/ChartFormCell';

interface ChartFormRowProps {
  day: number;
  values: number[];
  rowIndex: number;
  onChangeValue: (value: number, row: number, column: number) => void;
}

export const ChartFormRow = ({
  day,
  values,
  rowIndex,
  onChangeValue,
}: ChartFormRowProps) => (
  <tr className={styles.row}>
    <td className={styles.cell}>{day}</td>
    {values.map((value, index) => (
      <ChartFormCell
        key={index}
        value={value}
        onChange={onChangeValue}
        position={{
          row: rowIndex,
          column: index,
        }}
      />
    ))}
  </tr>
);
