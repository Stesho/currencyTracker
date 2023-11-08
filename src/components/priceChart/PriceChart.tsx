import React, { PureComponent } from 'react';
import { Chart } from 'react-google-charts';
import styles from './PriceChart.module.scss';

const data = [
  ['Day', '', '', '', ''],
  ['1', 20, 28, 38, 45],
  ['2', 31, 38, 55, 66],
  ['3', 50, 55, 77, 80],
  ['4', 77, 77, 66, 50],
  ['6', 68, 66, 22, 15],
  ['7', 24, 22, 15, 10],
  ['8', 11, 15, 47, 60],
  ['9', 43, 47, 51, 53],
  ['10', 48, 51, 56, 58],
  ['11', 50, 56, 70, 80],
  ['12', 73, 70, 65, 61],
  ['13', 61, 65, 90, 110],
  ['14', 88, 90, 92, 94],
  ['15', 95, 92, 87, 80],
  ['16', 87, 87, 38, 30],
  ['17', 31, 38, 55, 66],
  ['18', 50, 55, 77, 80],
  ['19', 77, 77, 66, 50],
  ['20', 68, 66, 22, 15],
  ['21', 24, 22, 15, 10],
  ['22', 11, 15, 47, 60],
  ['23', 43, 47, 51, 53],
  ['24', 48, 51, 56, 58],
  ['25', 50, 56, 70, 80],
  ['26', 73, 70, 65, 61],
  ['27', 61, 65, 90, 110],
  ['28', 88, 90, 92, 94],
  ['29', 95, 92, 87, 80],
];

const options = {
  legend: 'none',
  backgroundColor: 'none',
  bar: {
    groupWidth: '100%',
  },
  candlestick: {
    fallingColor: {
      strokeWidth: 0,
      fill: '#a52714',
      color: 'red',
    },
    risingColor: {
      strokeWidth: 0,
      fill: '#0f9d58',
    },
  },
  hAxis: {
    title: 'Day',
    colors: ['orange'],
  },
  vAxis: {
    title: 'Value',
  },
};

class PriceChart extends PureComponent {
  render() {
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

export default PriceChart;
