import { configureStore } from '@reduxjs/toolkit';
import { marsReducer } from './mars/marsSlice';

export const store = configureStore({
  reducer: {
    mars: marsReducer,
  },
});
