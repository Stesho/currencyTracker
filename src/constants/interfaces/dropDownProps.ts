import { CurrencyRated } from '@/constants/interfaces/currency';

export default interface DropDownProps {
  options: CurrencyRated[];

  onSelectOption: (option: CurrencyRated) => void;
}
