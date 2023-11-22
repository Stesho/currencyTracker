import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { storeMock } from '@/__mocks__/store';
import { SearchInput } from '@/components/ui/SearchInput/SearchInput';

describe('Search input', () => {
  it('should render with empty value', () => {
    const { getByPlaceholderText } = render(
      <SearchInput
        currencies={storeMock.currencies}
        onSelectCurrency={jest.fn}
        setNotFound={jest.fn}
      />,
    );

    const input = getByPlaceholderText(
      'Currency search...',
    ) as HTMLInputElement;

    expect(input.value).toBe('');
  });

  it('should render currencies list when input on focus', () => {
    const { getByPlaceholderText, getByText } = render(
      <SearchInput
        currencies={storeMock.currencies}
        onSelectCurrency={jest.fn}
        setNotFound={jest.fn}
      />,
    );

    const input = getByPlaceholderText(
      'Currency search...',
    ) as HTMLInputElement;
    fireEvent.focus(input);

    const listOption = getByText(storeMock.currencies[0].currencyName);

    expect(listOption).not.toBeNull();
  });

  it('should set selected currency as input value', () => {
    const onSelectCurrency = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <SearchInput
        currencies={storeMock.currencies}
        onSelectCurrency={onSelectCurrency}
        setNotFound={jest.fn}
      />,
    );

    const input = getByPlaceholderText(
      'Currency search...',
    ) as HTMLInputElement;
    fireEvent.focus(input);

    const listOption = getByText(storeMock.currencies[0].currencyName);
    fireEvent.click(listOption);

    expect(input.value).toBe(storeMock.currencies[0].currencyName);
    expect(onSelectCurrency).toBeCalled();
  });

  it('should set "not found" if currency is not found', () => {
    const setNotFound = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <SearchInput
        currencies={storeMock.currencies}
        onSelectCurrency={jest.fn}
        setNotFound={setNotFound}
      />,
    );

    const input = getByPlaceholderText(
      'Currency search...',
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'qwerty' } });

    const searchIcon = getByTestId('currencySearchInput');
    fireEvent.click(searchIcon);

    expect(setNotFound).toBeCalled();
  });
});
