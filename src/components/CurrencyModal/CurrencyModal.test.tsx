import React from 'react';
import * as reactRedux from 'react-redux';
import { fireEvent, render } from '@testing-library/react';

import { storeMock } from '@/__mocks__/store';
import ArgentinePesoIcon from '@/assets/img/peso-argentino-icon.png';
import { CurrencyModal } from '@/components/CurrencyModal/CurrencyModal';

import '@testing-library/jest-dom';

const currencyData = {
  id: 'ARS',
  iconUrl: ArgentinePesoIcon,
  currencyName: 'Argentine Peso',
  rate: 0.012,
};

jest.mock('react-redux');

describe('Currency Modal', () => {
  beforeAll(() => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
    useSelectorMock.mockReturnValue(storeMock);
  });

  it('should render passed currency', () => {
    const { getByText, getAllByText } = render(
      <CurrencyModal currency={currencyData} onClose={jest.fn} />,
    );

    expect(getByText(currencyData.currencyName)).toBeInTheDocument();
    expect(getAllByText(currencyData.id).length).toBe(2);
  });

  it('should recalculate currency when currency changes', () => {
    const { getByText, getByTestId } = render(
      <CurrencyModal currency={currencyData} onClose={jest.fn} />,
    );

    const prevRate = getByTestId('currencyModalRate').textContent;

    const selectedCurrency = getByText(storeMock.currencies[0].currencyName);
    fireEvent.click(selectedCurrency);

    const newSelectedCurrency = getByText(storeMock.currencies[1].currencyName);
    fireEvent.click(newSelectedCurrency);

    const nextRate = getByTestId('currencyModalRate').textContent;

    expect(nextRate).toBe('3.2865e-7 BTC');
    expect(nextRate).not.toBe(prevRate);
  });

  it('should recalculate currency when amount changes', () => {
    const { getByTestId, getByDisplayValue } = render(
      <CurrencyModal currency={currencyData} onClose={jest.fn} />,
    );

    const prevRate = getByTestId('currencyModalRate').textContent;

    const currencyInput = getByDisplayValue('1');
    fireEvent.change(currencyInput, { target: { value: 2 } });

    const nextRate = getByTestId('currencyModalRate').textContent;

    expect(nextRate).toBe('0.024 USD');
    expect(nextRate).not.toBe(prevRate);
  });
});
