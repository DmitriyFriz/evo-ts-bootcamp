import { Reducer } from 'redux';
import * as actionTypes from './actionTypes';
import { TBasketActions } from './actions';
import { Bascket } from '../../types';

export const basketReducer: Reducer<Bascket[], TBasketActions> = (state = [], action) => {
  switch (action.type) {
    case actionTypes.PIZZA_ADDED_INTO_BASKET:
      console.log(action.payload);
      return state;

    case actionTypes.PIZZA_REMOVED_FROM_BASKET:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
}
