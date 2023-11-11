import { ChartData } from '@/constants/chart/chartData';

export const addDayColumnToChartData = (
  values: number[][],
  tableHead: string[],
) => {
  const chartData: ChartData = values.map((row, index) => {
    const day = (index + 1).toString();
    return [day, ...row];
  });
  chartData.unshift(tableHead);

  return chartData;
};
