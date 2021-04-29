import { Reducer } from 'redux';
import * as actions from './actions';
import { TActions } from './types';


const reducer: Reducer<number, TActions> = (state = 0, action) => {
  switch (action.type) {
    case actions.UPDATE_BALANCE:
      return action.payload;

    case actions.CREDIT:
      return state - action.payload;

    case actions.DEBIT:
      return state + action.payload;

    case actions.SET_BALANCE_WITH_TAX:
      return state * (1 - (action.payload / 100));

    default:
      return state;
  }
}

export default reducer;
