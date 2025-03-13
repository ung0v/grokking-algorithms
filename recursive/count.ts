function count(array: Array<number>): number {
  if (array.slice(1).length === 0) {
    return 0;
  }
  return 1 + count(array.slice(1));
}

console.log(count([2, 4, 6, 9])); // 4
