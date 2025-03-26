export function selectionSort(array: Array<number>) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

// console.log(selectionSort([2, 1, 0, 5, 3, 6, 4]));
