import { flatFunction } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-26_09-March/task-26_09-March";
import test, { expect } from "@playwright/test";

test.describe("Flatten Deeply Nested Array", async () => {
  test("Flatten Deeply Nested Array case 1", async () => {
    let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    let n = 0;
    let expectedResult = [
      1,
      2,
      3,
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ];

    expect(flatFunction(arr, n)).toEqual(expectedResult);
  });
  test("Flatten Deeply Nested Array case 2", async () => {
    let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
    let n = 1;
    let expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15];

    expect(flatFunction(arr, n)).toEqual(expectedResult);
  });

  test("Flatten Deeply Nested Array case 3", async () => {
    let arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, [9, 10, 11], 12],
      [13, 14, 15],
    ];
    let n = 2;
    let expectedResult = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    expect(flatFunction(arr, n)).toEqual(expectedResult);
  });
});
