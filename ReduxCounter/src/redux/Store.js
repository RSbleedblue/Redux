import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/Slices/IncDecSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
