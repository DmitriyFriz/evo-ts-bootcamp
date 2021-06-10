import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { selectSelectedRover, selectSelectedSol, selectAllPhotos } from '../mars/selectors';
import { Photo } from '../../types';

export const selectFavourites = (state: RootState) => state.favourites;

export const selectFavouritesPhotos = createSelector(
  selectFavourites,
  selectAllPhotos,
  (favourites, allPhotos) => {
    return favourites.map(
      ({ id, rover, sol }) => allPhotos[rover]![sol].find((photo) => photo.id === id) as Photo
    );
  }
);

export const selectFavouritesIdByRoverSol = createSelector(
  selectSelectedSol,
  selectSelectedRover,
  selectFavourites,
  (sol, rover, favourite) => {
    const filterFavourite = favourite.filter((item) => item.sol === sol && item.rover === rover);
    return filterFavourite.map((item) => item.id);
  }
);
