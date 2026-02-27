import { filter } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-6_27-Feb/task-6_27-Feb";
import test, { expect } from "@playwright/test";

test.describe("Filter Elements from Array", async () => {
  test("case 1", async () => {
    let arr = [0, 10, 20, 30];
    let fn = function greaterThan10(n: number) {
      return n > 10;
    };

    expect(filter(arr, fn)).toEqual([20, 30]);
  });

  test("case 2", async () => {
    let arr = [1, 2, 3];
    let fn = function firstIndex(n, i) {
      return i === 0;
    };

    expect(filter(arr, fn)).toEqual([1]);
  });

  test("case 3", async () => {
    let arr = [-2, -1, 0, 1, 2];
    let fn = function plusOne(n) {
      return n + 1;
    };

    expect(filter(arr, fn)).toEqual([-2, 0, 1, 2]);
  });
});
