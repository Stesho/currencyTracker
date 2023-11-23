import { cutFirstRowFirstColumn } from '@/utils/cutFirstRowFirstColumn';

const chartData = [
  ['', 'Day', '', '', ''],
  ['1', 0, 0, 0, 0],
  ['2', 0, 0, 0, 0],
  ['3', 0, 0, 0, 0],
];

const noHeaderChartData = [
  ['1', 0, 0, 0, 0],
  ['2', 0, 0, 0, 0],
  ['3', 0, 0, 0, 0],
];

const noFirstColumnChartData = [
  ['Day', '', '', ''],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

describe('Cut first row and first column in table', () => {
  it('should return table without first row and first column', () => {
    expect(cutFirstRowFirstColumn(chartData)).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
    expect(cutFirstRowFirstColumn(noHeaderChartData)).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
    expect(cutFirstRowFirstColumn(noFirstColumnChartData)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  it('should return empty array if empty array passed', () => {
    expect(cutFirstRowFirstColumn([])).toEqual([]);
    expect(cutFirstRowFirstColumn([[], [], []])).toEqual([[], []]);
  });
});
