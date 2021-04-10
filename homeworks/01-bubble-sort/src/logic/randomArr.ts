const getRandomArr = (length: number): number[] => {
  return Array.from({ length }, () => +Math.random().toFixed(3));
}

export default getRandomArr;
