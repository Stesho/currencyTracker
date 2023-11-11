export const replaceDotToComma = (rate: number) => {
  const decimalPlaces = 3;
  const fixedRate = Number(rate.toFixed(decimalPlaces));
  return fixedRate.toString().replace(/\./g, ',');
};
