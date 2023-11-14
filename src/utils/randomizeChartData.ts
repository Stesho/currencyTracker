import { getRandomIntegerInRange } from '@/utils/getRandomIntegerInRange';

export const randomizeChartData = (rowsCount: number) => {
  const minValue = 10;
  const maxValue = 100;
  const openings = [...new Array(rowsCount)].map(() =>
    getRandomIntegerInRange(minValue, maxValue),
  );
  const closings = openings.map((opening, index) => {
    if (index === openings.length - 1) {
      return getRandomIntegerInRange(minValue, maxValue);
    }

    return openings[index + 1];
  });
  const lows = openings.map((opening, index) => {
    if (openings[index] < closings[index]) {
      return getRandomIntegerInRange(minValue, openings[index]);
    }

    return getRandomIntegerInRange(openings[index], maxValue);
  });
  const highs = openings.map((opening, index) => {
    if (openings[index] < closings[index]) {
      return getRandomIntegerInRange(closings[index], maxValue);
    }

    return getRandomIntegerInRange(closings[index], minValue);
  });
  const rows = [...new Array(rowsCount)].map((row, index) => [
    lows[index],
    openings[index],
    closings[index],
    highs[index],
  ]);

  return rows;
};
