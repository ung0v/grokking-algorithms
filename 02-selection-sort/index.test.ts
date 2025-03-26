import { selectionSort } from "./index";

describe("Selection Sort", () => {
  test("should sort an array of numbers", () => {
    const arr = [64, 34, 25, 12, 22, 11, 90];
    expect(selectionSort(arr)).toEqual([11, 12, 22, 25, 34, 64, 90]);
  });

  test("should handle empty array", () => {
    expect(selectionSort([])).toEqual([]);
  });

  test("should handle array with duplicate elements", () => {
    const arr = [5, 2, 8, 5, 1, 9, 2, 8];
    expect(selectionSort(arr)).toEqual([1, 2, 2, 5, 5, 8, 8, 9]);
  });
});
