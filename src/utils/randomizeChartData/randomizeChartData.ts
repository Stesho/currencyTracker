import { getRandomIntegerInRange } from '@/utils/getRandomIntegerInRange/getRandomIntegerInRange';

const getNextOpening = (
  lastOpening: number,
  preLastOpening: number,
  minValue: number,
  maxValue: number,
  minCandlestickSize: number,
) =>
  lastOpening > preLastOpening
    ? getRandomIntegerInRange(lastOpening + minCandlestickSize, maxValue)
    : getRandomIntegerInRange(minValue, lastOpening - minCandlestickSize);

const randomizeOpenings = (
  rowsCount: number,
  minValue: number,
  maxValue: number,
) => {
  const openings: number[] = [];
  const minCandlestickSize = 5;
  const minOpeningSeries = 2;
  let currentOpeningSeries = 1;

  for (let i = 0; i < rowsCount; i++) {
    let newOpening;

    if (i < 2) {
      newOpening = getRandomIntegerInRange(minValue, maxValue);
      openings.push(newOpening);
      continue;
    }

    if (currentOpeningSeries < minOpeningSeries) {
      newOpening = getNextOpening(
        openings[i - 1],
        openings[i - 2],
        minValue,
        maxValue,
        minCandlestickSize,
      );
    } else {
      newOpening = getRandomIntegerInRange(minValue, maxValue);
      currentOpeningSeries = 0;
    }

    currentOpeningSeries++;
    openings.push(newOpening);
  }

  return openings;
};

export const randomizeChartData = (rowsCount: number) => {
  if (rowsCount < 1 || !Number.isInteger(rowsCount)) {
    return [];
  }

  const minValue = 50;
  const maxValue = 100;
  const lowHighValuesSpread = 10;
  const minLowHighValuesSpread = 1;

  const openings = randomizeOpenings(rowsCount, minValue, maxValue);

  const closings = openings.map((opening, index) =>
    index === openings.length - 1
      ? getRandomIntegerInRange(minValue, maxValue)
      : openings[index + 1],
  );

  const lows = openings.map((opening, index) =>
    openings[index] < closings[index]
      ? getRandomIntegerInRange(
          openings[index] - lowHighValuesSpread,
          openings[index] - minLowHighValuesSpread,
        )
      : getRandomIntegerInRange(
          openings[index] + minLowHighValuesSpread,
          openings[index] + lowHighValuesSpread,
        ),
  );

  const highs = openings.map((opening, index) =>
    openings[index] < closings[index]
      ? getRandomIntegerInRange(
          closings[index] + minLowHighValuesSpread,
          closings[index] + lowHighValuesSpread,
        )
      : getRandomIntegerInRange(
          closings[index] - lowHighValuesSpread,
          closings[index] - minLowHighValuesSpread,
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
