interface ICurrencyCard {
  id: number;
  iconUrl: string;
  currencyName: string;
  rate: number;
  onClick?: () => void;
}

export default ICurrencyCard;
