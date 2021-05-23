import { configureStore } from '@reduxjs/toolkit';
import { marsReducer } from './mars/marsSlice';
import { favouritesReducer } from './favourites/favouritesSlice';
import { routeReducer } from './route/routeSlice';

export const store = configureStore({
  reducer: {
    mars: marsReducer,
    favourites: favouritesReducer,
    route: routeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
