import { ChartData } from '@/types/chartData';

const generateTableHead = (
  columnsCount: number,
  candleStickCaption?: string,
) => {
  const caption = candleStickCaption || 'Day';
  return [...new Array(columnsCount)].map((head, index) =>
    index === 1 ? caption : '',
  );
};

export const addDayDataToChartData = (values: number[][]) => {
  const chartData: ChartData = values.map((row, index) => {
    const day = (index + 1).toString();
    return [day, ...row];
  });
  const tableHead = generateTableHead(values[0].length + 1);
  chartData.unshift(tableHead);

  return chartData;
};
