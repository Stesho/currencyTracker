import { fetchAllCurrentRates } from '@/api/coinApi/fetchAllCurrentRates';
import { currencies } from '@/constants/currencies/currencies';
import { CurrencyResponse } from '@/types/response';

export const getCurrencies = async () => {
  const response = await fetchAllCurrentRates();

  return response.rates.map((currencyWithRate: CurrencyResponse) => {
    const currency = currencies.find(
      (item) => item.id === currencyWithRate.asset_id_quote,
    );

    return {
      ...currency,
      rate: currencyWithRate.rate,
    };
  });
};
