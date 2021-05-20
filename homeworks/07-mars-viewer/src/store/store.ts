import { configureStore } from '@reduxjs/toolkit';
import { marsReducer } from './mars/marsSlice';

export const store = configureStore({
  reducer: {
    mars: marsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
