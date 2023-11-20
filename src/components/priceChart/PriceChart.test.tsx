import React from 'react';
import { render } from '@testing-library/react';

import { PriceChart } from '@/components/priceChart/PriceChart';

import '@testing-library/jest-dom';

const chartData = [
  ['Day', '', '', '', ''],
  ['1', 20, 28, 38, 45],
  ['2', 31, 38, 55, 66],
  ['3', 50, 55, 77, 80],
  ['4', 77, 77, 66, 50],
];

describe('Price chart', () => {
  it('should render with passed data', () => {
    const { container } = render(<PriceChart data={chartData} />);

    expect(container).not.toBeNull();
  });

  it('should render if empty array passed', () => {
    const { container } = render(<PriceChart data={[]} />);

    expect(container).not.toBeNull();
  });
});
