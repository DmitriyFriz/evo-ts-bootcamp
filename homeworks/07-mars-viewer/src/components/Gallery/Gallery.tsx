import React from 'react';
import { useAppSelector } from '../../hooks';
import { selectPhotos } from '../../store/mars/selectors';
import { PhotoItem } from '../PhotoItem';

// style
import s from './Gallery.module.scss';

export const Gallery = () => {
  const photos = useAppSelector(selectPhotos);
  if (photos === undefined) {
    return <div>Photos are not loaded</div>;
  }
  const view = photos.map((photo) => <PhotoItem photo={photo} key={photo.id} />);
  return <div className={s.container}>{view}</div>;
};
