import { addDayDataToChartData } from '@/utils/addDayDataToChartData';

const chartDataShort = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

const chartDataLarge = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

describe('Add day data to chart data', () => {
  it('should correctly add Header and days column', () => {
    expect(addDayDataToChartData(chartDataShort)).toEqual([
      ['', 'Day', '', '', ''],
      ['1', 0, 0, 0, 0],
      ['2', 0, 0, 0, 0],
      ['3', 0, 0, 0, 0],
    ]);

    expect(addDayDataToChartData([[], [], []])).toEqual([
      [''],
      ['1'],
      ['2'],
      ['3'],
    ]);
  });

  it('should correctly add Header and days column if data has large rows', () => {
    expect(addDayDataToChartData(chartDataLarge)).toEqual([
      ['', 'Day', '', '', '', '', '', ''],
      ['1', 0, 0, 0, 0, 0, 0, 0],
      ['2', 0, 0, 0, 0, 0, 0, 0],
      ['3', 0, 0, 0, 0, 0, 0, 0],
    ]);
  });

  it('should return empty array if empty array passed', () => {
    expect(addDayDataToChartData([])).toEqual([]);
  });
});
