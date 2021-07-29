import { combineReducers } from 'redux';
import { pizzaReducer } from './pizza/reducer';
import { basketReducer } from './basket/reducer';

export const rootReducer = combineReducers({
  pizza: pizzaReducer,
  basket: basketReducer
});

export type TStore = ReturnType<typeof rootReducer>
