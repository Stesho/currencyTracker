export const generateTableHead = (
  columnsCount: number,
  candleStickCaption?: string,
) => {
  const caption = candleStickCaption || 'Day';
  return [...new Array(columnsCount)].map((head, index) =>
    index === 1 ? caption : '',
  );
};
