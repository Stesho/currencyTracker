import axios, { AxiosError } from 'axios';

import { BASE_URL } from '@/constants/api/coinApi/endpoints';
import { COIN_API_KEY } from '@/constants/environment/environment';

export const coinApiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'text/json',
    'X-CoinAPI-Key': COIN_API_KEY,
  },
});

coinApiInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
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
  },
);
