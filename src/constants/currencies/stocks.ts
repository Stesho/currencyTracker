import ICurrencyCard from '@/constants/interfaces/ICurrencyCard';
import BovespaIcon from '@/assets/img/Bovespa Icon.png';
import IfixIcon from '@/assets/img/IFIX.png';

const stocks: ICurrencyCard[] = [
  { id: 1, iconUrl: BovespaIcon, currencyName: 'Bovespa Index', rate: 0.15 },
  { id: 2, iconUrl: IfixIcon, currencyName: 'IFIX', rate: 0.15 },
];

export default stocks;
