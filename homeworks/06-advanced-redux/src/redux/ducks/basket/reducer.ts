import { Reducer } from 'redux';
import * as actionTypes from './actionTypes';
import { TBasketActions } from './actions';
import { BasketItem } from '../../../types';
import { updateBasket} from './utils';

export const basketReducer: Reducer<BasketItem[], TBasketActions> = (state = [], action) => {
  switch (action.type) {
    case actionTypes.PIZZA_ADDED_INTO_BASKET: {
      const { id, pizza } = action.payload;
      return updateBasket(id, state, pizza, 1);
    }

    case actionTypes.PIZZA_REMOVED_FROM_BASKET: {
      const { id, pizza } = action.payload;
      return updateBasket(id, state, pizza, -1);
    }

    default:
      return state;
  }
}
