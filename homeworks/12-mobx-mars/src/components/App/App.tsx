import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/storeMobX';
import { Router } from '../Router';
import { PhotosPage } from '../PhotosPage';
import { FavouritesPage } from '../FavouritesPage';
import { RouteName } from '../../types';

// style
import s from './App.module.scss';

export const App = observer(() => {
  const routesStore = useStore('routeStore');

  return (
    <div className={s.container}>
      <Router />
      {routesStore.route === RouteName.Photos && <PhotosPage />}
      {routesStore.route === RouteName.Favourites && <FavouritesPage />}
    </div>
  );
});
