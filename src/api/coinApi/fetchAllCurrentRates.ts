import axios, { AxiosError } from 'axios';
import {
  BASE_URL,
  GET_ALL_CURRENT_RATES_URL,
} from '@/constants/api/coinApi/endpoints';
import { COIN_API_KEY } from '@/constants/environtment/environment';
import currencies from '@/constants/currencies/currencies';

const fetchAllCurrentRates = async (baseCurrency: string = 'USD') => {
  try {
    const currencyCodes = currencies.map((currency) => currency.id).join(',');

    const currentRates = await axios.get(
      `${BASE_URL}${GET_ALL_CURRENT_RATES_URL}/${baseCurrency}`,
      {
        headers: {
          Accept: 'text/json',
          'X-CoinAPI-Key': COIN_API_KEY,
        },
        params: {
          filter_asset_id: currencyCodes,
          invert: true,
        },
      },
    );

    return currentRates.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
    return null;
  }
};

export default fetchAllCurrentRates;
