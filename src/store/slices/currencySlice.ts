import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CurrencyRated } from '@/types/currency';
import { getCurrentTimeIn12HoursFormat } from '@/utils/getCurrentTimeIn12HoursFormat';

interface InitialState {
  currencies: CurrencyRated[];
  lastUpdate: string;
  isFetching: boolean;
}

const initialState: InitialState = {
  currencies: [],
  lastUpdate: '',
  isFetching: false,
};

export const counterSlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setIsFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    updateCurrencies: (state, action: PayloadAction<CurrencyRated[]>) => {
      state.currencies = action.payload;
      state.lastUpdate = getCurrentTimeIn12HoursFormat();
    },
  },
});

export const { updateCurrencies, setIsFetching } = counterSlice.actions;
export default counterSlice.reducer;
