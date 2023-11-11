export const replaceDotToComma = (rate: number, decimalPlaces: number) => {
  const fixedRate = Number(rate.toFixed(decimalPlaces));
  return fixedRate.toString().replace(/\./g, ',');
};
