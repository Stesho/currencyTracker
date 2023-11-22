import { fetchAllCurrentRates } from '@/api/coinApi/fetchAllCurrentRates';
import { currencies } from '@/constants/currencies/currencies';
import { Currency, CurrencyRated } from '@/types/currency';
import { CurrencyResponseRate } from '@/types/currencyResponse';

export const getCurrencies = async (): Promise<CurrencyRated[]> => {
  try {
    const response = await fetchAllCurrentRates();

    if (!response) {
      return [];
    }

    const currenciesRated = response.rates.map(
      (currencyWithRate: CurrencyResponseRate) => {
        const currency = currencies.find(
          (item: Currency) => item.id === currencyWithRate.asset_id_quote,
        );

        if (!currency) {
          return null;
        }

        const currencyRated: CurrencyRated = {
          ...currency,
          rate: currencyWithRate.rate,
        };

        return currencyRated;
      },
    );

    return currenciesRated.filter(
      (currencyRated) => currencyRated !== null,
    ) as CurrencyRated[];
  } catch (error) {
    console.error(error);
    return [];
  }
};
