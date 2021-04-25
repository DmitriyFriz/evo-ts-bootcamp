import { mergeSort } from './mergeSort';
import { numberCompare, stringCompare } from '../helpers/collectionCompareFn';

describe('Merge Sort', () => {
  it.each([
    [ [10, 3, 5, 12, 8] , [3, 5, 8, 10, 12] ],
    [ [-1, 0, 4, 3, 2, 150, 9] , [ -1, 0, 2, 3, 4, 9, 150] ],
    [ [1, 2, 3], [1, 2, 3] ]
  ])('should return sorted array of numbers', (arr, expected) => {
    const result = mergeSort(arr, numberCompare);
    expect(result).toEqual(expected);
  });

  it.each([
    [ ['t', 'a', 'w', 'w', 'f', 'd'] , ['a', 'd', 'f', 't', 'w', 'w'] ],
    [ ['yellow', 'red', 'green', 'grow', 'number'] , [ 'green', 'grow', 'number', 'red', 'yellow' ] ],
    [ ['Array', 'array', 'ARRAY'], ['ARRAY', 'Array', 'array'] ]
  ])('should return sorted array of strings', (arr, expected) => {
    const result = mergeSort(arr, stringCompare);
    expect(result).toEqual(expected);
  });

  it('should return empty array', () => {
    const result = mergeSort([], numberCompare);
    expect(result).toEqual([]);
  });

});
