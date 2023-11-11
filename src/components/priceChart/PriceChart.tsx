import React, { PureComponent } from 'react';
import { Chart } from 'react-google-charts';

import { ChartData } from '@/constants/chart/chartData';
import { options } from '@/constants/chart/options';

import styles from './PriceChart.module.scss';

interface PriceChartProps {
  data: ChartData;
}

export class PriceChart extends PureComponent<PriceChartProps> {
  render() {
    const { data } = this.props;

    return (
      <Chart
        chartType='CandlestickChart'
        data={data}
        options={options}
        className={styles.chart}
      />
    );
  }
}
