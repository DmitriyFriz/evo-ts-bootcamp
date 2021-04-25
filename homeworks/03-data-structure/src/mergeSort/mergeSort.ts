export interface ICompareFunction<T> {
  (a:T, b:T): number;
}

export const mergeSort = <T>(arr: T[], compareFn: ICompareFunction<T>): T[] => {
  if (arr.length < 2) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middle);
  const rightArr = arr.slice(middle);

  return merge(mergeSort(leftArr, compareFn), mergeSort(rightArr, compareFn), compareFn);
}

const merge = <T>(leftArr: T[], rightArr: T[], compareFn: ICompareFunction<T>): T[] => {
  const sortedArr: T[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while ( leftIndex < leftArr.length && rightIndex < rightArr.length ) {
    const leftItem = leftArr[leftIndex];
    const rightItem = rightArr[rightIndex];
    if (compareFn(leftItem, rightItem) <= 0) {
      sortedArr.push(leftItem);
      leftIndex += 1;
    } else {
      sortedArr.push(rightItem)
      rightIndex += 1;
    }
  }

  const leftRemainder = leftArr.slice(leftIndex);
  const rightRemainder = rightArr.slice(rightIndex);

  return [...sortedArr, ...leftRemainder, ...rightRemainder];
}
