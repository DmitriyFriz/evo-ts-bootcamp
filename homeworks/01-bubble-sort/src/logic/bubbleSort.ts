const bubbleSortStep = (arr: number[]): {newArr: number[], isSorted: boolean} => {
  let isSorted: boolean = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      isSorted = false;

      return {newArr: arr, isSorted}
    }
  }

  return {newArr: arr, isSorted};
};

export default bubbleSortStep;
