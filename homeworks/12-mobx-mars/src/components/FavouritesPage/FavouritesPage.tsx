import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/storeMobX';
import { Gallery } from '../Gallery';
import { PhraseFavouritesPage } from '../../types';

export const FavouritesPage = observer(() => {
  const favouritesStore = useStore('favouritesStore');
  const photos = favouritesStore.favouritesPhotos;
  return (
    <>
      <Gallery
        photos={photos}
        undefinedPhrase={PhraseFavouritesPage.undefined}
        emptyPhrase={PhraseFavouritesPage.empty}
      />
    </>
  );
});
