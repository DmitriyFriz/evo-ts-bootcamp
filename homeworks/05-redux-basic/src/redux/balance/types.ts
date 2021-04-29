import * as actions from './actions';

interface IUpdateBalance {
  type: typeof actions.UPDATE_BALANCE;
  payload: number;
}

interface ICredit {
  type: typeof actions.CREDIT;
  payload: number;
}

interface ISubtract_Percentage {
  type: typeof actions.SET_BALANCE_WITH_TAX;
  payload: number;
}

interface IDebit {
  type: typeof actions.DEBIT;
  payload: number;
}

export type TActions = IUpdateBalance | ICredit | ISubtract_Percentage | IDebit;
