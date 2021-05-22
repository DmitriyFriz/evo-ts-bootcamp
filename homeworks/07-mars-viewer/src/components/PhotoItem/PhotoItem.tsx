import React from 'react';
import { Photo } from '../../types';
import { Like } from '../Like';

// style
import s from './PhotoItem.module.scss';

interface PhotoItemProps {
  photo: Photo;
}

export const PhotoItem = ({ photo }: PhotoItemProps) => {
  const { id, imgSrc, roverName, cameraName } = photo;
  return (
    <div className={s.container}>
      <img className={s.photo} src={imgSrc} alt={cameraName} />
      <Like id={id} />
      <span className={s.title}>
        {roverName}, {cameraName}
      </span>
    </div>
  );
};
