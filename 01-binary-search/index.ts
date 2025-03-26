/**
 * Binary search implementation that finds the index of a number in a sorted array
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
export function binarySearch(array: Array<number>, searchNum: number) {
  // Initialize pointers for the search range
  let lo = 0;
  let hi = array.length - 1;

  do {
    // Find the middle point of current range
    const mid = Math.floor((hi + lo) / 2);
    const num = array[mid];

    // If found, return the index
    if (num === searchNum) {
      return mid;
    }

    // Adjust search range based on comparison
    if (searchNum > num) {
      lo = mid + 1; // Search in upper half
    } else {
      hi = mid - 1; // Search in lower half
    }
  } while (lo <= hi); // Continue while there's a valid range to search

  return -1; // Number not found in array
}

// console.log(binarySearch([1, 2, 3, 4, 5], 4)); // 3
