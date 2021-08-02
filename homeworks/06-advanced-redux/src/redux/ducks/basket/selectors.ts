import { TStore } from '../index';

export const getBasket = (state: TStore) => state.basket;

export const getTotalPrice = (state: TStore) =>
  state.basket.reduce(
    (sum, item) => Math.round((sum + item.price) * 100) / 100,
    0
  );
