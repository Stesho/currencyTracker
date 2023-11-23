import { recalculateChartData } from '@/utils/recalculateChartData';

const chartData = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];

describe('Recalculate chart data', () => {
  it('should correctly change chart data rows', () => {
    expect(recalculateChartData(chartData, 1)).toEqual([[1, 2, 3, 4]]);

    expect(recalculateChartData(chartData, 5)).toEqual([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    expect(recalculateChartData(chartData, 0)).toEqual([]);
    expect(recalculateChartData(chartData, -2)).toEqual([]);
  });

  it('should correctly change chart data rows if empty array passed', () => {
    expect(recalculateChartData([[], [], [], [], []], 2)).toEqual([[], []]);

    expect(recalculateChartData([[], []], 4)).toEqual([
      [],
      [],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    expect(recalculateChartData([], 3)).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    expect(recalculateChartData([], 0)).toEqual([]);
    expect(recalculateChartData([], -2)).toEqual([]);
  });
});
