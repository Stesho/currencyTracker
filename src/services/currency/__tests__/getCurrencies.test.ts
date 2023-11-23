import { coinApiInstance } from '@/api/coinApi/config';
import { getCurrencies } from '@/services/currency/getCurrencies';
import { CurrencyRated } from '@/types/currency';
import { CurrencyResponse } from '@/types/currencyResponse';

const currencies: CurrencyRated[] = [
  {
    id: 'BTC',
    iconUrl: '',
    currencyName: 'Bitcoin',
    rate: 36215.26,
  },
  {
    id: 'EUR',
    iconUrl: '',
    currencyName: 'Euro',
    rate: 1.089,
  },
];

const coinApiResponse: CurrencyResponse = {
  asset_id_base: 'USD',
  rates: [
    {
      time: '',
      asset_id_quote: 'BTC',
      rate: 36215.26,
    },
    {
      time: '',
      asset_id_quote: 'EUR',
      rate: 1.089,
    },
  ],
};

jest.mock('axios', () => ({
  create: jest.fn(() => ({
    interceptors: {
      response: {
        use: jest.fn(),
      },
    },
    get: jest.fn(),
  })),
}));

describe('Get currencies', () => {
  let mockGet: jest.SpyInstance;

  beforeEach(() => {
    mockGet = jest.spyOn(coinApiInstance, 'get');
  });

  afterEach(() => {
    mockGet.mockClear();
  });

  it('should return currencies with rates', async () => {
    mockGet.mockImplementation(() => Promise.resolve(coinApiResponse));

    const receivedCurrencies = await getCurrencies();

    expect(receivedCurrencies).toEqual(currencies);
  });

  it('should return empty error if response return null', async () => {
    mockGet.mockImplementation(() => Promise.resolve(null));

    const receivedCurrencies = await getCurrencies();

    expect(receivedCurrencies).toEqual([]);
  });

  it('should return empty error if response throw error', async () => {
    mockGet.mockImplementation(() => Promise.reject(new Error('Unknown')));

    const receivedCurrencies = await getCurrencies();

    expect(receivedCurrencies).toEqual([]);
  });
});
