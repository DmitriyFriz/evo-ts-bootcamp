import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RoverName } from '../../types';

type Favourite = { id: number; sol: number; rover: RoverName };

const initialState: Favourite[] = [];

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    interactLike(state, action: PayloadAction<Favourite>) {
      const { id } = action.payload;
      const index = state.findIndex((item) => item.id === id);
      if (index === -1) {
        state.push(action.payload);
      } else {
        state.splice(index, 1);
      }
    },
  },
});

export const favouritesReducer = favouritesSlice.reducer;
export const { interactLike } = favouritesSlice.actions;
