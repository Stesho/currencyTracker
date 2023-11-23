import { ChartData } from '@/types/chartData';

export const cutFirstRowFirstColumn = (table: ChartData) => {
  const noFirstRowData = table.slice(1, table.length);
  const noFirstColumnData = noFirstRowData.map((row) =>
    row.slice(1, row.length),
  );
  return noFirstColumnData;
};
