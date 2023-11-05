interface CurrencyCardProps {
  id: string;
  iconUrl: string;
  currencyName: string;
  rate: number;
  onClick?: () => void;
}

export default CurrencyCardProps;
