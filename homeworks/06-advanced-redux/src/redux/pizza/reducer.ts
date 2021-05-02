import { Reducer } from 'redux';
import * as actionTypes from './actionTypes';
import { pizzaActions } from './actions';
import { Pizza } from '../../types';

export const pizzaReducer: Reducer<Pizza[], pizzaActions> = (state = [], action) => {
  switch (action.type) {
    case actionTypes.PIZZA_VIEWED:
      return action.payload.pizza;

    default:
      return state;
  }
}
