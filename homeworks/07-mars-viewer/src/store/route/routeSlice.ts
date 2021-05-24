import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RouteName } from '../../types';

const initialState: RouteName = RouteName.Photos as RouteName;

export const routeSlice = createSlice({
  name: 'route',
  initialState,
  reducers: {
    changeRoute(state, action: PayloadAction<RouteName>) {
      return action.payload;
    },
  },
});

export const routeReducer = routeSlice.reducer;

export const { changeRoute } = routeSlice.actions;
