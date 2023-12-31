export const recalculateChartData = (
  values: number[][],
  rowsCount: number,
  cellsCountInRow: number = 4,
) => {
  if (rowsCount < 0) {
    return [];
  }

  const rows = values.slice(0, rowsCount);

  for (let i = 0; rows.length < rowsCount; i++) {
    const row = [...new Array(cellsCountInRow)].fill(0);
    rows.push(row);
  }

  return rows;
};
