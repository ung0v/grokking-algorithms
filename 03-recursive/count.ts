function countRecursive(array: Array<number>): number {
  if (array.slice(1).length === 0) {
    return 0;
  }
  return 1 + countRecursive(array.slice(1));
}

console.log(countRecursive([2, 4, 6, 9])); // 4
