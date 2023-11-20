export const calculateInitialChartData = (
  rowsCount: number,
  cellsCountInRow: number = 4,
) => {
  const rowsArr = [...new Array(rowsCount)];
  return rowsArr.map(() => new Array(cellsCountInRow).fill(0));
};
