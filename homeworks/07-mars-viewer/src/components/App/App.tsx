import React from 'react';
import { useAppSelector } from '../../hooks';
import { Router } from '../Router';
import { PhotosPage } from '../PhotosPage';
import { FavouritesPage } from '../FavouritesPage';
import { selectRoute } from '../../store/route/selectors';
import { RouteName } from '../../types';

// style
import s from './App.module.scss';

export const App = () => {
  const route = useAppSelector(selectRoute);
  return (
    <div className={s.container}>
      <Router />
      {route === RouteName.Photos && <PhotosPage />}
      {route === RouteName.Favourites && <FavouritesPage />}
    </div>
  );
};
