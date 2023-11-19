import AustralianDollarIcon from '@/assets/img/australian-dollar-icon.png';
import BitcoinIcon from '@/assets/img/bitcoin-icon.png';
import CanadianDollarIcon from '@/assets/img/canadian-dollar-icon.png';
import DollarIcon from '@/assets/img/dollar-icon.png';
import EuroIcon from '@/assets/img/euro-icon.png';
import ArgentinePesoIcon from '@/assets/img/peso-argentino-icon.png';
import PoundIcon from '@/assets/img/pound-icon.png';
import YuanIcon from '@/assets/img/won-icon.png';
import YenIcon from '@/assets/img/yen-icon.png';
import { Currency } from '@/types/currency';

export const currencies: Currency[] = [
  {
    id: 'ARS',
    iconUrl: ArgentinePesoIcon,
    currencyName: 'Argentine Peso',
  },
  {
    id: 'AUD',
    iconUrl: AustralianDollarIcon,
    currencyName: 'Australian Dollar',
  },
  {
    id: 'BTC',
    iconUrl: BitcoinIcon,
    currencyName: 'Bitcoin',
  },
  {
    id: 'CAD',
    iconUrl: CanadianDollarIcon,
    currencyName: 'Canadian Dollar',
  },
  {
    id: 'CNY',
    iconUrl: YuanIcon,
    currencyName: 'Yuan',
  },
  {
    id: 'EUR',
    iconUrl: EuroIcon,
    currencyName: 'Euro',
  },
  {
    id: 'JPY',
    iconUrl: YenIcon,
    currencyName: 'Yen',
  },
  {
    id: 'GBP',
    iconUrl: PoundIcon,
    currencyName: 'Pound Sterling',
  },
  {
    id: 'USDT',
    iconUrl: DollarIcon,
    currencyName: 'Commercial Dollar',
  },
];
