import BitcoinIcon from '@/assets/img/bitcoin-icon.png';
import DollarIcon from '@/assets/img/dollar-icon.png';
import EuroIcon from '@/assets/img/euro-icon.png';
import { CurrencyRated } from '@/types/currency';

interface StoreState {
  currencies: CurrencyRated[];
  lastUpdate: string;
}

export const storeMock: StoreState = {
  lastUpdate: '12:30 AM',
  currencies: [
    {
      id: 'EUR',
      iconUrl: EuroIcon,
      currencyName: 'Euro',
      rate: 0.012,
    },
    {
      id: 'BTC',
      iconUrl: BitcoinIcon,
      currencyName: 'Bitcoin',
      rate: 36512.123,
    },
    {
      id: 'USD',
      iconUrl: DollarIcon,
      currencyName: 'Commercial dollar',
      rate: 1.078,
    },
  ],
};
