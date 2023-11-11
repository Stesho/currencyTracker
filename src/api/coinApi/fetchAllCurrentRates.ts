import { AxiosError } from 'axios';

import { coinApiAxiosInstance } from '@/api/coinApi/coinApiAxiosInstance';
import { GET_ALL_CURRENT_RATES_URL } from '@/constants/api/coinApi/endpoints';
import { currencies } from '@/constants/currencies/currencies';

export const fetchAllCurrentRates = async (baseCurrency: string = 'USD') => {
  try {
    const currencyCodes = currencies.map((currency) => currency.id).join(',');

    const currentRates = await coinApiAxiosInstance.get(
      `${GET_ALL_CURRENT_RATES_URL}/${baseCurrency}`,
      {
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
