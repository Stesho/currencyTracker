import { randomizeChartData } from '@/utils/randomizeChartData';

describe('Randomize chart data', () => {
  it('should return different array on each call', () => {
    const rowsCount = 3;

    const randomized1 = randomizeChartData(rowsCount);
    const randomized2 = randomizeChartData(rowsCount);
    const randomized3 = randomizeChartData(rowsCount);

    expect(randomized1).not.toEqual(randomized2);
    expect(randomized1).not.toEqual(randomized3);
    expect(randomized2).not.toEqual(randomized3);
  });

  it('should return empty array if zero, negative number or non integer passed', () => {
    expect(randomizeChartData(0)).toEqual([]);
    expect(randomizeChartData(-1)).toEqual([]);
    expect(randomizeChartData(-10.8)).toEqual([]);
    expect(randomizeChartData(2.5)).toEqual([]);
  });
});
