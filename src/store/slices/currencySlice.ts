import { createSlice } from '@reduxjs/toolkit';
import CurrencyCardProps from '@/constants/interfaces/currencyCardProps';

interface InitialState {
  currencies: CurrencyCardProps[];
}

const initialState: InitialState = {
  currencies: [],
};

export const counterSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    updateCurrencies: (state, action) => {
      state.currencies = action.payload;
    },
  },
});

export const { updateCurrencies } = counterSlice.actions;
export default counterSlice.reducer;
