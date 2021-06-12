import { createContext } from './storeUtils';
import { MarsStore } from './MarsStore';

import { RouteStore } from './RouteStore';

const marsStore = new MarsStore();

const routeStore = new RouteStore();

export const { StoreProvider, useStore } = createContext({
  marsStore,

  routeStore,
});
