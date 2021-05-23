import React from 'react';
import { PhotoItem } from '../PhotoItem';
import { Photo, PhraseFavouritesPage, PhrasePhotosPage } from '../../types';

// style
import s from './Gallery.module.scss';

interface GalleryProps {
  photos: Photo[] | undefined;
  undefinedPhrase: PhrasePhotosPage | PhraseFavouritesPage;
  emptyPhrase: PhrasePhotosPage | PhraseFavouritesPage;
}

export const Gallery = ({ photos, undefinedPhrase, emptyPhrase }: GalleryProps) => {
  if (photos === undefined) {
    return <div>{undefinedPhrase}</div>;
  }

  if (photos.length === 0) {
    return <div>{emptyPhrase}</div>;
  }

  const view = photos.map((photo) => <PhotoItem photo={photo} key={photo.id} />);

  return <div className={s.container}>{view}</div>;
};
