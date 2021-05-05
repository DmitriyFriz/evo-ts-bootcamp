import { ThunkAction } from 'redux-thunk';
import * as actions from './actions';
import { TPizzaActions } from './actions';
import { TStore } from '../store';
import { getPizza } from '../../services/api';

type TPizzaThunk = ThunkAction<void, TStore, unknown, TPizzaActions>

export const loadingPizza = (): TPizzaThunk => async (dispatch) => {
  try {
    const { items: pizza } = await getPizza();
    dispatch(actions.pizzaViewed(pizza));
  } catch(error) {
    alert(error.message);
  }
}
