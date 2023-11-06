interface CurrencyCardProps {
  id: string;
  iconUrl: string;
  currencyName: string;
  rate: number;
  onClick?: (currency?: CurrencyCardProps) => void;
}

export default CurrencyCardProps;
