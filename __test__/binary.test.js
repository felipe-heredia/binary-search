const binarySearch = require("../utils/index");

describe("Test binarySearch", () => {
  test("caseA", () => {
    const elements = [0, 11, 21, 33, 45, 45, 61, 71, 72, 73];
    const target = 33;
    expect(binarySearch(elements, target)).toBe(3);
  });

  test("caseB", () => {
    const elements = [1, 2, 3, 4, 5];
    const target = 3;
    expect(binarySearch(elements, target)).toBe(2);
  });

  test("caseC", () => {
    const elements = [1, 2, 3, 4, 6];
    const target = 20;
    expect(binarySearch(elements, target)).toBe(-1);
  });

  test("caseD", () => {
    const elements = [1, 2, 3, 4, 6];
    const target = 5;
    expect(binarySearch(elements, target)).toBe(-1);
  });

  test("caseE", () => {
    const elements = [0, 2, 5, 9];
    const target = 9;
    expect(binarySearch(elements, target)).toBe(3);
  });
});
