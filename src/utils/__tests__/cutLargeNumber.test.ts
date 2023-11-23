import { cutLargeNumber } from '@/utils/cutLargeNumber';

describe('Cut large number', () => {
  it('should correctly shorten the fractional part if digits after zeroes is positive', () => {
    expect(cutLargeNumber(0.00123456, 2)).toBe('0.0012');
    expect(cutLargeNumber(0.00564832, 0)).toBe('0.00');
    expect(cutLargeNumber(0.564832, 0)).toBe('0.');
    expect(cutLargeNumber(123.0123456, 1)).toBe('123.01');
  });

  it('should correctly shorten the fractional part if digits after zeroes is negative', () => {
    expect(cutLargeNumber(123.987, -3)).toBe('1');
    expect(cutLargeNumber(123.000987, -2)).toBe('123.0');
    expect(cutLargeNumber(0, -2)).toBe('');
  });

  it('should correctly shorten the fractional part if digits after zeroes not passed', () => {
    expect(cutLargeNumber(0.000009456321)).toBe('0.000009456');
    expect(cutLargeNumber(945.65)).toBe('945.65');
    expect(cutLargeNumber(945.0065)).toBe('945.0065');
  });

  it('should correctly reduce the number of digits if the number contains positive "e"', () => {
    expect(cutLargeNumber(9654.00000002e20)).toBe('9.6540e+23');
    expect(cutLargeNumber(1001235.0945562e20, 2)).toBe('1.0012e+26');

    expect(cutLargeNumber(-9654.00000002e20)).toBe('-9.6540e+23');
    expect(cutLargeNumber(-1001235.0945562e20, 2)).toBe('-1.0012e+26');
  });

  it('should correctly reduce the number of digits if the number contains negative "e"', () => {
    expect(cutLargeNumber(1.001235945562e-20)).toBe('1.001235e-20');
    expect(cutLargeNumber(0.001235945562e-20, 2)).toBe('1.23e-23');
    expect(cutLargeNumber(10012.0035945562e-20, 2)).toBe('1.0012e-16');

    expect(cutLargeNumber(-1.001235945562e-20)).toBe('-1.001235e-20');
    expect(cutLargeNumber(-0.001235945562e-20, 2)).toBe('-1.23e-23');
    expect(cutLargeNumber(-10012.0035945562e-20, 2)).toBe('-1.0012e-16');
  });
});
