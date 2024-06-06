import { createSlice } from '@reduxjs/toolkit';

const incDecSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    step: 1,
  },
  reducers: {
    increment: (state) => {
      state.value += state.step;
    },
    decrement: (state) => {
      state.value -= state.step;
    },
    changeStep: (state) => {
      state.step += 1;
    },
  },
});

export const { increment, decrement, changeStep } = incDecSlice.actions;

export default incDecSlice.reducer;
