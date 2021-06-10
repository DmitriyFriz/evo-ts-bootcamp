import React from 'react';
import { Photo } from '../../types';
import { ReactComponent as LikeLogo } from '../../assets/img/like.svg';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { selectSelectedSol, selectSelectedRover } from '../../store/mars/selectors';
import { selectFavouritesIdByRoverSol } from '../../store/favourites/selectors';
import { interactLike } from '../../store/favourites/favouritesSlice';

// style
import s from './Like.module.scss';

type LikeProps = Pick<Photo, 'id'>;

export const Like = ({ id }: LikeProps) => {
  const dispatch = useAppDispatch();
  const rover = useAppSelector(selectSelectedRover);
  const sol = useAppSelector(selectSelectedSol);

  const favouritesIdByRoverSol = useAppSelector(selectFavouritesIdByRoverSol);
  const opacity = favouritesIdByRoverSol.includes(id) ? 1 : 0.2;

  return (
    <div className={s.like}>
      <LikeLogo
        className={s.like_logo}
        style={{ opacity }}
        onClick={() => {
          dispatch(interactLike({ id, sol, rover }));
        }}
      />
    </div>
  );
};
