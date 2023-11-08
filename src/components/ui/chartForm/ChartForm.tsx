import React, { useState } from 'react';
import ChartFormRow from '@/components/ui/chartForm/chartFormRow/ChartFormRow';
import { ChartData } from '@/constants/chart/chartData';
import { Chart } from 'react-google-charts';
import styles from './ChartForm.module.scss';

interface ChartFormProps {
  onSubmit: (data: ChartData) => void;
}

function ChartForm({ onSubmit }: ChartFormProps) {
  const rowsCount = 5;
  const [values, setValues] = useState<number[][]>(() => {
    const cellsCountInRow = 4;
    const rowsArr = [...new Array(rowsCount)];
    return rowsArr.map(() => new Array(cellsCountInRow).fill(0));
  });

  const onChange = (value: number, row: number, column: number) => {
    const newValues = [...values];
    newValues[row][column] = Number(value);
    setValues(newValues);
  };

  const onSubmitForm = () => {
    const chartData: ChartData = values.map((row, index) => {
      const day = (index + 1).toString();
      return [day, ...row];
    });
    chartData.unshift(['Day', '', '', '', '']);

    onSubmit(chartData);
  };

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <td className={styles.cell}>day</td>
            <td className={styles.cell}>low</td>
            <td className={styles.cell}>opening</td>
            <td className={styles.cell}>closing</td>
            <td className={styles.cell}>high</td>
          </tr>
        </thead>
        <tbody>
          {values.map((value, index) => (
            <ChartFormRow
              key={index}
              day={index + 1}
              rowIndex={index}
              values={values[index]}
              onChangeValue={onChange}
            />
          ))}
        </tbody>
      </table>
      <button type='button' onClick={onSubmitForm}>
        Build chart
      </button>
    </div>
  );
}

export default ChartForm;
