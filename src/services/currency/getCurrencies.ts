import fetchAllCurrentRates from '@/api/coinApi/fetchAllCurrentRates';
import CurrencyResponse from '@/constants/api/coinApi/response';
import currencies from '@/constants/currencies/currencies';

const getCurrencies = async () => {
  const decimalPlaces = 3;
  const response = await fetchAllCurrentRates();

  return response.rates.map((currencyWithRate: CurrencyResponse) => {
    const currency = currencies.find((item) => item.id === currencyWithRate.asset_id_quote);

    const fixedRate = Number(currencyWithRate.rate.toFixed(decimalPlaces));
    const formattedRate = fixedRate.toString().replace(/\./g, ',');

    return {
      ...currency,
      rate: formattedRate,
    };
  });
};

export default getCurrencies;
