import { createSlice } from '@reduxjs/toolkit';

import { CurrencyRated } from '@/types/currency';
import { getCurrentTimeIn12HoursFormat } from '@/utils/getCurrentTimeIn12HoursFormat/getCurrentTimeIn12HoursFormat';

interface InitialState {
  currencies: CurrencyRated[];
  lastUpdate: string;
}

const initialState: InitialState = {
  currencies: [],
  lastUpdate: '',
};

export const counterSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    updateCurrencies: (state, action) => {
      state.currencies = action.payload;
      state.lastUpdate = getCurrentTimeIn12HoursFormat();
    },
  },
});

export const { updateCurrencies } = counterSlice.actions;
export default counterSlice.reducer;
