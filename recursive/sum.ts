function sum(array: Array<number>) {
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }
  const last = array.shift();
  return last + sum(array);
}

console.log(sum([2, 4, 6])); // 12
