import React from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store/storeMobX';
import { RouteName } from '../../types';

// style
import s from './Router.module.scss';

export const Router = observer(() => {
  const routeStore = useStore('routeStore');

  return (
    <div className={s.container}>
      <button
        className={s.route_button}
        onClick={() => routeStore.changeRoute(RouteName.Photos)}
        type="button"
        disabled={routeStore.route === RouteName.Photos}
      >
        {RouteName.Photos}
      </button>
      <span className={s.separator}>|</span>
      <button
        className={s.route_button}
        onClick={() => routeStore.changeRoute(RouteName.Favourites)}
        type="button"
        disabled={routeStore.route === RouteName.Favourites}
      >
        {RouteName.Favourites}
      </button>
    </div>
  );
});
