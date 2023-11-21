import { coinApiInstance } from '@/api/coinApi/config';
import { GET_ALL_CURRENT_RATES_URL } from '@/constants/api/coinApi/endpoints';
import { currencies } from '@/constants/currencies/currencies';
import { CurrencyResponse } from '@/types/currencyResponse';

export const fetchAllCurrentRates = async (baseCurrency: string = 'USD') => {
  const currencyCodes = currencies.map((currency) => currency.id).join(',');

  const receivedCurrencies: CurrencyResponse = await coinApiInstance.get(
    `${GET_ALL_CURRENT_RATES_URL}/${baseCurrency}`,
    {
      params: {
        filter_asset_id: currencyCodes,
        invert: true,
      },
    },
  );

  return receivedCurrencies;
};
