import React from 'react';
import { useAppSelector } from '../../hooks';
import { selectFavouritesPhotos } from '../../store/favourites/selectors';
import { Gallery } from '../Gallery';
import { PhraseFavouritesPage } from '../../types';
import {} from 'mobx-react-lite';

export const FavouritesPage = () => {
  const photos = useAppSelector(selectFavouritesPhotos);
  return (
    <>
      <Gallery
        photos={photos}
        undefinedPhrase={PhraseFavouritesPage.undefined}
        emptyPhrase={PhraseFavouritesPage.empty}
      />
    </>
  );
};
