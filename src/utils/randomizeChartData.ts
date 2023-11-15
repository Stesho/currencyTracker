import { getRandomIntegerInRange } from '@/utils/getRandomIntegerInRange';

export const randomizeChartData = (rowsCount: number) => {
  const minValue = 10;
  const maxValue = 100;
  const valuesSpread = 10;

  const openings = [...new Array(rowsCount)].map(() =>
    getRandomIntegerInRange(minValue, maxValue),
  );

  const closings = openings.map((opening, index) =>
    index === openings.length - 1
      ? getRandomIntegerInRange(minValue, maxValue)
      : openings[index + 1],
  );

  const lows = openings.map((opening, index) =>
    openings[index] < closings[index]
      ? getRandomIntegerInRange(
          openings[index] - valuesSpread,
          openings[index] - 1,
        )
      : getRandomIntegerInRange(
          openings[index] + 1,
          openings[index] + valuesSpread,
        ),
  );

  const highs = openings.map((opening, index) =>
    openings[index] < closings[index]
      ? getRandomIntegerInRange(
          closings[index] + 1,
          closings[index] + valuesSpread,
        )
      : getRandomIntegerInRange(
          closings[index] - valuesSpread,
          closings[index] - 1,
        ),
  );

  const rows = [...new Array(rowsCount)].map((row, index) => [
    lows[index],
    openings[index],
    closings[index],
    highs[index],
  ]);

  return rows;
};
