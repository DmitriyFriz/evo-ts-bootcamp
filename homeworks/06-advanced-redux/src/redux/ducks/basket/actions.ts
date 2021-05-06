import * as actionType from './actionTypes';
import { Pizza } from '../../../types';

export const pizzaAddedIntoBasket = (id: string, pizza: Pizza[]) => ({
  type: actionType.PIZZA_ADDED_INTO_BASKET,
  payload: { id, pizza }
} as const);

export const pizzaRemovedFromBasket = (id: string, pizza: Pizza[]) => ({
  type: actionType.PIZZA_REMOVED_FROM_BASKET,
  payload: { id, pizza }
} as const);

export type TBasketActions =
  | ReturnType<typeof pizzaAddedIntoBasket>
  | ReturnType<typeof pizzaRemovedFromBasket>
