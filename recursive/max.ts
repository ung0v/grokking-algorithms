function findMax(array: Array<number>): number | undefined {
  if (array.length === 0) {
    return undefined;
  }
  if (array.length === 1) {
    return array[0];
  }
  const max = array[0];
  if (max > Number(findMax(array.slice(1)))) {
    return max;
  }
  return findMax(array.slice(1));
}

console.log(findMax([10, 2, 4, 6, 1])); // 10
