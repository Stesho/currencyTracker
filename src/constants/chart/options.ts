export const options = {
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
