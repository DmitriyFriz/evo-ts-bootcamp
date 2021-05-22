import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { selectSelectedRover, selectSelectedSol } from '../mars/selectors';

export const selectFavourites = (state: RootState) => state.favourites;

export const selectFavouritesIdByRoverSol = createSelector(
  selectSelectedSol,
  selectSelectedRover,
  selectFavourites,
  (sol, rover, favourite) => {
    const filterFavourite = favourite.filter((item) => item.sol === sol && item.rover === rover);
    return filterFavourite.map((item) => item.id);
  }
);
