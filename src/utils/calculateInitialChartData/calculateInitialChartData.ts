export const calculateInitialChartData = (
  rowsCount: number,
  cellsCountInRow: number = 4,
) => {
  if (rowsCount < 0) {
    return [];
  }

  const rowsArr = [...new Array(Math.round(rowsCount))];
  return rowsArr.map(() => new Array(cellsCountInRow).fill(0));
};
