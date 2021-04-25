import { ICompareFunction } from '../mergeSort/mergeSort';

export const numberCompare: ICompareFunction<number> = (a, b) => a -b;

export const stringCompare: ICompareFunction<string> = (a, b) => {
  if ( a < b ) {
    return -1;
  }

  if ( a > b ) {
    return 1;
  }

  return 0;
};
