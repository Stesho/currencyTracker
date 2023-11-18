import { fetchAllCurrentRates } from '@/api/coinApi/fetchAllCurrentRates';
import { currencies } from '@/constants/currencies/currencies';
import { CurrencyResponseRate } from '@/types/currencyResponse';

export const getCurrencies = async () => {
  const response = await fetchAllCurrentRates();

  return response.rates.map((currencyWithRate: CurrencyResponseRate) => {
    const currency = currencies.find(
      (item) => item.id === currencyWithRate.asset_id_quote,
    );

    return {
      ...currency,
      rate: currencyWithRate.rate,
    };
  });
};
