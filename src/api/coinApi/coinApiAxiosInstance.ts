import axios from 'axios';

import { BASE_URL } from '@/constants/api/coinApi/endpoints';
import { COIN_API_KEY } from '@/constants/environment/environment';

export const coinApiAxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'text/json',
    'X-CoinAPI-Key': COIN_API_KEY,
  },
});
