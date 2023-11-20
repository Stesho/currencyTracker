import { fetchAllCurrentRates } from '@/api/coinApi/fetchAllCurrentRates';
import { currencies } from '@/constants/currencies/currencies';
import { CurrencyResponseRate } from '@/types/currencyResponse';

export const getCurrencies = async () => {
  try {
    const response = await fetchAllCurrentRates();

    if (!response) {
      return [];
    }

    return response.rates.map((currencyWithRate: CurrencyResponseRate) => {
      const currency = currencies.find(
        (item) => item.id === currencyWithRate.asset_id_quote,
      );

      return {
        ...currency,
        rate: currencyWithRate.rate,
      };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};
