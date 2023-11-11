export const removeLeadingZeros = (val: string) => {
  const leadingZeroes = /^0*/;
  return val.replace(leadingZeroes, '');
};
