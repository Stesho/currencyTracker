import ICurrencyCard from '@/constants/interfaces/ICurrencyCard';
import DollarIcon from '@/assets/img/Dollar Icon.png';
import EuroIcon from '@/assets/img/Euro Icon.png';
import BitcoinIcon from '@/assets/img/Bitcoin Icon.png';
import YenIcon from '@/assets/img/Yen Icon.png';
import CanadianDollarIcon from '@/assets/img/Canadian Dollar Icon.png';

const currencies: ICurrencyCard[] = [
  { id: 1, iconUrl: DollarIcon, currencyName: 'Commercial Dollar', rate: 5.13 },
  { id: 2, iconUrl: EuroIcon, currencyName: 'Euro', rate: 5.43 },
  { id: 3, iconUrl: BitcoinIcon, currencyName: 'Bitcoin', rate: 122148.71 },
  { id: 4, iconUrl: YenIcon, currencyName: 'Yen', rate: 0.03 },
  {
    id: 5,
    iconUrl: CanadianDollarIcon,
    currencyName: 'Canadian Dollar',
    rate: 3.78,
  },
];

export default currencies;
