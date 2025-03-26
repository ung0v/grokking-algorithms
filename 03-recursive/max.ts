function findMaxRecursive(array: Array<number>): number | undefined {
  if (array.length === 0) {
    return undefined;
  }
  if (array.length === 1) {
    return array[0];
  }
  const max = array[0];
  if (max > Number(findMaxRecursive(array.slice(1)))) {
    return max;
  }
  return findMaxRecursive(array.slice(1));
}

console.log(findMaxRecursive([10, 2, 4, 6, 1])); // 10
