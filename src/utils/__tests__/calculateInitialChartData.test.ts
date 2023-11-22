import { calculateInitialChartData } from '@/utils/calculateInitialChartData';

describe('Calculate initial chart data', () => {
  it('should return an array of arrays filled with zeroes', () => {
    expect(calculateInitialChartData(3)).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    expect(calculateInitialChartData(1)).toEqual([[0, 0, 0, 0]]);

    expect(calculateInitialChartData(0)).toEqual([]);
  });

  it('should round count of rows if passed value if fractional number', () => {
    expect(calculateInitialChartData(2.9)).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    expect(calculateInitialChartData(2.1)).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);

    expect(calculateInitialChartData(0.5)).toEqual([[0, 0, 0, 0]]);
  });

  it('should return empty array if passed rows count is negative', () => {
    expect(calculateInitialChartData(-1)).toEqual([]);
    expect(calculateInitialChartData(-2.5)).toEqual([]);
    expect(calculateInitialChartData(-10)).toEqual([]);
  });
});
