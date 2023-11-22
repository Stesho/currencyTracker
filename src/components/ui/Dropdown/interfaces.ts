import { CurrencyRated } from '@/types/currency';

export interface DropDownProps {
  options: CurrencyRated[];

  onSelectOption: (option: CurrencyRated) => void;
  className?: string;
}
