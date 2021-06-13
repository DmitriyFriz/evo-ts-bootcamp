import { createContext } from './storeUtils';
import { MarsStore } from './MarsStore';
import { FavouritesStore } from './FavouritesStore';
import { RouteStore } from './RouteStore';

const marsStore = new MarsStore();
const favouritesStore = new FavouritesStore(marsStore);
const routeStore = new RouteStore();

export const { StoreProvider, useStore } = createContext({
  marsStore,
  favouritesStore,
  routeStore,
});
