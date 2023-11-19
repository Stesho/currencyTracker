export interface CurrencyResponseRate {
  time: string;
  asset_id_quote: string;
  rate: number;
}

export interface CurrencyResponse {
  asset_id_base: string;
  rates: CurrencyResponseRate[];
}
