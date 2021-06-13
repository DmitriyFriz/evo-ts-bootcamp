import React from 'react';
import { observer } from 'mobx-react-lite';
import { Photo } from '../../types';
import { ReactComponent as LikeLogo } from '../../assets/img/like.svg';
import { useStore } from '../../store/storeMobX';

// style
import s from './Like.module.scss';

type LikeProps = Pick<Photo, 'id'>;

export const Like = observer(({ id }: LikeProps) => {
  const favouritesStore = useStore('favouritesStore');

  const opacity = favouritesStore.favourites.includes(id) ? 1 : 0.2;

  return (
    <div className={s.like}>
      <LikeLogo
        className={s.like_logo}
        style={{ opacity }}
        onClick={() => favouritesStore.interactLike(id)}
      />
    </div>
  );
});
