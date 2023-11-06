import fetchAllCurrentRates from '@/api/coinApi/fetchAllCurrentRates';
import CurrencyResponse from '@/constants/api/coinApi/response';
import currencies from '@/constants/currencies/currencies';

const getCurrencies = async () => {
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

export default getCurrencies;
