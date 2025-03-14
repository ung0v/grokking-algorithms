function binarySearchRecursive(
  array: Array<number>,
  searchNum: number,
  left: number,
  right: number
) {
  if (left > right) {
    return -1;
  }

  const mid = Math.floor((left + right) / 2);
  const num = array[mid];
  if (num == searchNum) {
    return mid;
  }
  if (searchNum < mid) {
    return binarySearchRecursive(array, searchNum, left, mid - 1);
  }
  return binarySearchRecursive(array, searchNum, mid + 1, right);
}

console.log(binarySearchRecursive([1, 2, 3, 4, 5], 5, 0, 4)); // 3
