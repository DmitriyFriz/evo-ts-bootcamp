import * as actionType from './actionTypes';
import { Pizza } from '../../types';

export const pizzaLoaded = (pizza: Pizza[]) => ({
    type: actionType.PIZZA_VIEWED,
    payload: { pizza }
} as const);

export type TPizzaActions = ReturnType<typeof pizzaLoaded>

