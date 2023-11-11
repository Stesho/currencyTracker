export const calculateInitialChartData = (
  rowsCount: number,
  cellsCountInRow: number,
) => {
  const rowsArr = [...new Array(rowsCount)];
  return rowsArr.map(() => new Array(cellsCountInRow).fill(0));
};
