import { createSlice } from '@reduxjs/toolkit';

import { CurrencyRated } from '@/types/currency';

interface InitialState {
  currencies: CurrencyRated[];
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
