import { binarySearch } from "./index";

describe("binarySearch", () => {
  test("should find element in middle of array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  test("should find first element", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toBe(0);
  });

  test("should find last element", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toBe(4);
  });

  test("should return -1 when element not found", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });

  test("should return -1 for empty array", () => {
    expect(binarySearch([], 1)).toBe(-1);
  });
});
