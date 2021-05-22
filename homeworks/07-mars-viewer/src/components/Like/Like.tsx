import React from 'react';
import { Photo } from '../../types';
import { ReactComponent as LikeLogo } from '../../assets/img/like.svg';
import { useAppSelector } from '../../hooks';
import { selectSelectedSol, selectSelectedRover } from '../../store/mars/selectors';

// style
import s from './Like.module.scss';

type LikeProps = Pick<Photo, 'id'>;

export const Like = ({ id }: LikeProps) => {
  const rover = useAppSelector(selectSelectedRover);
  const sol = useAppSelector(selectSelectedSol);
  return (
    <div className={s.like}>
      <LikeLogo
        className={s.like_logo}
        onClick={() => {
          console.log({ id, rover, sol });
        }}
      />
    </div>
  );
};
