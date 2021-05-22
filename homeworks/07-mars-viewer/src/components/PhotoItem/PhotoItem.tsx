import React from 'react';
import { Photo } from '../../types';

// style
import s from './PhotoItem.module.scss';

interface PhotoItemProps {
  photo: Photo;
}

export const PhotoItem = ({ photo }: PhotoItemProps) => {
  const { imgSrc, roverName, cameraName } = photo;
  return (
    <div className={s.photo}>
      <img className={s.photo} src={imgSrc} alt={cameraName} />
    </div>
  );
};
