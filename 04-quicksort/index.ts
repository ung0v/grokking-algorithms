function quickSort(array: number[]) {
  const len = array.length;
  if (len < 2) {
    return array;
  }
  const pivot = array[0];
  let leftAr: number[] = [],
    rightAr: number[] = [];
  for (let i = 1; i < len; i++) {
    if (pivot < array[i]) {
      rightAr = [...rightAr, array[i]];
    } else {
      leftAr = [...leftAr, array[i]];
    }
  }
  return [...quickSort(leftAr), pivot, ...quickSort(rightAr)];
}

console.log(quickSort([10, 2, 4, 6, 1])); // [1, 2, 4, 6, 10]
