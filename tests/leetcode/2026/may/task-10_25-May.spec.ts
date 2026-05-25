import { expect, test } from "@playwright/test";
import { findMissingAndRepeatedValues } from "../../../../src/leetcode/2026/may/task-10_25-May/task-10_25-May";

test.describe("Find Missing and Repeated Values", async () => {
  test("Find Missing and Repeated Values case 1", async () => {
    let grid = [
      [1, 3],
      [2, 2],
    ];
    let output = [2, 4];
    expect(findMissingAndRepeatedValues(grid)).toEqual(output);
  });

  test("Find Missing and Repeated Values case 2", async () => {
    let grid = [
      [9, 1, 7],
      [8, 9, 2],
      [3, 4, 6],
    ];
    let output = [9, 5];
    expect(findMissingAndRepeatedValues(grid)).toEqual(output);
  });
});
