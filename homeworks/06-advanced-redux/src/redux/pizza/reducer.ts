import { Reducer } from 'redux';
import * as actionTypes from './actionTypes';
import { TPizzaActions } from './actions';
import { Pizza } from '../../types';

export const pizzaReducer: Reducer<Pizza[], TPizzaActions> = (state = [], action) => {
  switch (action.type) {
    case actionTypes.PIZZA_VIEWED:
      return action.payload.pizza;

    default:
      return state;
  }
}
