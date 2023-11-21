import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button/Button';
import { ChartFormRow } from '@/components/ui/chartForm/chartFormRow/ChartFormRow';
import { NumberInput } from '@/components/ui/numberInput/NumberInput';
import { chartFormOptions } from '@/constants/chart/chartFormOptions';
import { ChartData } from '@/types/chartData';
import { addDayDataToChartData } from '@/utils/addDayDataToChartData/addDayDataToChartData';
import { calculateInitialChartData } from '@/utils/calculateInitialChartData/calculateInitialChartData';
import { cutFirstRowFirstColumn } from '@/utils/cutFirstRowFirstColumn/cutFirstRowFirstColumn';
import { randomizeChartData } from '@/utils/randomizeChartData/randomizeChartData';
import { recalculateChartData } from '@/utils/recalculateChartData/recalculateChartData';

import styles from './ChartForm.module.scss';

interface ChartFormProps {
  onSubmit: (data: ChartData) => void;
  initialChartData?: ChartData;
}

export const ChartForm = ({ onSubmit, initialChartData }: ChartFormProps) => {
  const minDaysCount = 1;
  const maxDaysCount = 31;
  const [rowsCount, setRowsCount] = useState(() =>
    initialChartData
      ? initialChartData.length - 1
      : chartFormOptions.initialDaysCount,
  );
  const [values, setValues] = useState<number[][]>(() =>
    initialChartData
      ? cutFirstRowFirstColumn(initialChartData)
      : calculateInitialChartData(rowsCount, chartFormOptions.columnsCount),
  );

  const onChangeValue = (value: number, row: number, column: number) => {
    const newValues = [...values];
    newValues[row][column] = Number(value);
    setValues(newValues);
  };

  const onChangeRowsCount = (value: number) => {
    setRowsCount(value);
  };

  const onSubmitForm = () => {
    const chartData = addDayDataToChartData(values);
    onSubmit(chartData);
  };

  const setStaticValues = () => {
    setValues(randomizeChartData(rowsCount));
  };

  useEffect(() => {
    const newValues = recalculateChartData(
      values,
      rowsCount,
      chartFormOptions.columnsCount,
    );
    setValues(newValues);
  }, [rowsCount]);

  return (
    <div className={styles.chartForm}>
      <div className={styles.daysInput}>
        <span>Days count:</span>
        <NumberInput
          value={rowsCount}
          setValue={onChangeRowsCount}
          min={minDaysCount}
          max={maxDaysCount}
          isIntegersOnly
        />
        <div className={styles.limits}>
          <span>max: {maxDaysCount}</span>
          <span>min: {minDaysCount}</span>
        </div>
      </div>
      <table className={styles.table}>
        <thead>
          <tr className={styles.row}>
            <td className={`${styles.cell} ${styles.dayCell}`}>day</td>
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
              onChangeValue={onChangeValue}
            />
          ))}
        </tbody>
      </table>
      <div className={styles.buttons}>
        <Button onClick={onSubmitForm} className={styles.button}>
          Build chart
        </Button>
        <Button onClick={setStaticValues}>Set random values</Button>
      </div>
    </div>
  );
};
