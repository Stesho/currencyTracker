export const cutLargeNumber = (
  num: number,
  numbersAfterZerosCount: number = 4,
) => {
  const stringNum = num.toString();
  const dotIndex = stringNum.indexOf('.');
  const eIndex = stringNum.indexOf('e');
  let firstNumAfterZeroesIndex = dotIndex + 1;

  while (stringNum[firstNumAfterZeroesIndex] === '0') {
    firstNumAfterZeroesIndex++;
  }

  let trimmedNumber = stringNum.slice(
    0,
    firstNumAfterZeroesIndex + numbersAfterZerosCount,
  );

  if (eIndex !== -1) {
    const n = eIndex - (firstNumAfterZeroesIndex + numbersAfterZerosCount);
    const numberOfDegrees = Number(
      stringNum.slice(eIndex + 2, stringNum.length),
    );
    const sign = stringNum[eIndex + 1];
    trimmedNumber += `e${sign}${numberOfDegrees + n}`;
  }

  return trimmedNumber;
};
