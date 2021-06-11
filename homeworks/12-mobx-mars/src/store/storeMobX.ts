import { createContext } from './storeUtils';
import { MarsStore } from './MarsStore';

const marsStore = new MarsStore();

export const { StoreProvider, useStore } = createContext({
  marsStore,
});
