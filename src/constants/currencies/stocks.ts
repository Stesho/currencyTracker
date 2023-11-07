import BovespaIcon from '@/assets/img/Bovespa Icon.png';
import IfixIcon from '@/assets/img/IFIX.png';
import { CurrencyRated } from '@/constants/interfaces/currency';

const stocks: CurrencyRated[] = [
  {
    id: 'Bovespa',
    iconUrl: BovespaIcon,
    currencyName: 'Bovespa Index',
    rate: 0.15,
  },
  {
    id: 'IFIX',
    iconUrl: IfixIcon,
    currencyName: 'IFIX',
    rate: 0.15,
  },
];

export default stocks;
