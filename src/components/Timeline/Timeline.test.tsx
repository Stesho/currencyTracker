import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { storeMock } from '@/__mocks__/store';
import { Timeline } from '@/components/Timeline/Timeline';

import '@testing-library/jest-dom';

describe('Timeline', () => {
  it('should set the default currency', () => {
    const { getAllByText } = render(
      <Timeline currencies={storeMock.currencies} />,
    );

    const selectedCurrency = getAllByText(storeMock.currencies[0].currencyName);

    expect(selectedCurrency[0]).toBeInTheDocument();
    expect(selectedCurrency[1]).toBeInTheDocument();
    expect(selectedCurrency.length).toBe(2);
  });

  it('should change selected currency when new currency select', () => {
    const { getByText, getAllByText } = render(
      <Timeline currencies={storeMock.currencies} />,
    );

    const currencySelect = getAllByText(
      storeMock.currencies[0].currencyName,
    )[0];
    fireEvent.click(currencySelect);

    const newCurrency = getByText(storeMock.currencies[1].currencyName);
    fireEvent.click(newCurrency);

    const newCurrencies = getAllByText(storeMock.currencies[1].currencyName);

    expect(newCurrencies.length).toBe(2);
  });
});
