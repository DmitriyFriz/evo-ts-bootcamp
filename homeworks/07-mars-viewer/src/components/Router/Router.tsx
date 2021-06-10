import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { RouteName } from '../../types';
import { changeRoute } from '../../store/route/routeSlice';
import { selectRoute } from '../../store/route/selectors';

// style
import s from './Router.module.scss';

export const Router = () => {
  const dispatch = useAppDispatch();
  const route = useAppSelector(selectRoute);

  return (
    <div className={s.container}>
      <button
        className={s.route_button}
        onClick={() => dispatch(changeRoute(RouteName.Photos))}
        type="button"
        disabled={route === RouteName.Photos}
      >
        {RouteName.Photos}
      </button>
      <span className={s.separator}>|</span>
      <button
        className={s.route_button}
        onClick={() => dispatch(changeRoute(RouteName.Favourites))}
        type="button"
        disabled={route === RouteName.Favourites}
      >
        {RouteName.Favourites}
      </button>
    </div>
  );
};
