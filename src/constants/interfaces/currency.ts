interface Currency {
  id: string;
  iconUrl: string;
  currencyName: string;
}

interface CurrencyRated extends Currency {
  rate: number;
}

export type { Currency, CurrencyRated };
