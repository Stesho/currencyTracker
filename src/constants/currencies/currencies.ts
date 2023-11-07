import DollarIcon from '@/assets/img/Dollar Icon.png';
import ArgentinePesoIcon from '@/assets/img/Peso Argentino Icon.png';
import AustralianDollarIcon from '@/assets/img/Australian Dollar Icon.png';
import EuroIcon from '@/assets/img/Euro Icon.png';
import BitcoinIcon from '@/assets/img/Bitcoin Icon.png';
import YenIcon from '@/assets/img/Yen Icon.png';
import CanadianDollarIcon from '@/assets/img/Canadian Dollar Icon.png';
import YuanIcon from '@/assets/img/Won Icon.png';
import PoundIcon from '@/assets/img/Pound Icon.png';
import { Currency } from '@/constants/interfaces/currency';

const currencies: Currency[] = [
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

export default currencies;
