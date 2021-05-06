import { ThunkAction } from 'redux-thunk';
import * as actions from './actions';
import { TBasketActions } from './actions';
import { TStore } from '../index';
import { getPizza } from '../pizza/selectors';

type TBasketThunk = ThunkAction<void, TStore, unknown, TBasketActions>

export const addToBasket = (id: string): TBasketThunk => async (dispatch, getState) => {
  const pizza = getPizza(getState());
  dispatch(actions.pizzaAddedIntoBasket(id, pizza));
}

export const removeFromBasket = (id: string): TBasketThunk => async (dispatch, getState) => {
  const pizza = getPizza(getState());
  dispatch(actions.pizzaRemovedFromBasket(id, pizza));
}
