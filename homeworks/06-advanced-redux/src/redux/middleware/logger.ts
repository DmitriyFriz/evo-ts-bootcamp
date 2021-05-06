import { Dispatch } from 'redux';
import * as pizzaActionTypes from '../ducks/pizza/actionTypes';
import * as basketActionTypes from '../ducks/basket/actionTypes';
import { TPizzaActions } from '../ducks/pizza/actions';
import { TBasketActions } from '../ducks/basket/actions';

type TActions = TPizzaActions | TBasketActions;

export const logger = () => (next: Dispatch<TActions>) => (action: TActions) => {
  let logData = {}

  if (isBelongedActionTypes(action.type, basketActionTypes)) {
    logData = logBasketAction(action as TBasketActions);
  }

  if (isBelongedActionTypes(action.type, pizzaActionTypes)) {
    logData = {
      eventName: action.type,
    }
  }

  sendLogs(logData);

  return next(action);
}

const isBelongedActionTypes = (type: string, ActionTypes: { [key: string]: string }): boolean => {
  const arrActionTypes = Object.values(ActionTypes);
  return arrActionTypes.some((actionType) => actionType === type);
}

const logBasketAction = (action: TBasketActions): object => {
  const { type, payload: { id, pizza } } = action as TBasketActions;
    const currentPizza = pizza.find((item) => item._id === id);

    if (currentPizza !== undefined) {
      const { name, price } = currentPizza;
      return {
        eventName: type,
        pizzaName: name,
        pizzaPrice: price
      }
    } else {
      return {
        eventName: type,
        pizzaName: 'undefined',
        pizzaPrice: 'undefined'
      }
    }
}


export const sendLogs = (data: object) => {
  fetch('http://localhost:3001/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((json) => {
    console.log(json);
  }).catch((ex) => {
    console.log(ex);
  });
}
