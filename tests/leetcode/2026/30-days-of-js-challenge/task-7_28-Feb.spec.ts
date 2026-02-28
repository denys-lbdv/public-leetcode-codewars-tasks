import { reduce } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-7_28-Feb/task-7_28-Feb";
import test, { expect } from "@playwright/test";

test.describe("Array Reduce Transformation", async () => {
  test("case 1", async () => {
    let arr = [1, 2, 3, 4];
    let fn = function sum(accum, curr) {
      return accum + curr;
    };
    let init = 0;

    expect(reduce(arr, fn, init)).toBe(10);
  });

  test("case 2", async () => {
    let arr = [1, 2, 3, 4];
    let fn = function sum(accum, curr) {
      return accum + curr * curr;
    };

    let init = 100;

    expect(reduce(arr, fn, init)).toBe(130);
  });

  test("case 3", async () => {
    let arr: [] = [];
    let fn = function sum(accum, curr) {
      return 0;
    };
    let init = 25;

    expect(reduce(arr, fn, init)).toBe(25);
  });
});
