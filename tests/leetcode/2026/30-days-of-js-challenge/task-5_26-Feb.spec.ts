import { map } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-5_26-Feb/task-5_26-Feb";
import test, { expect } from "@playwright/test";

test.describe("Apply Transform Over Each Element in Array", async () => {
  test("case 1", async () => {
    let fn = function plusone(n) {
      return n + 1;
    };
    expect(map([1, 2, 3], fn)).toEqual([2, 3, 4]);
  });

  test("case 2", async () => {
    let fn = function plusone(n, i) {
      return n + i;
    };
    expect(map([1, 2, 3], fn)).toEqual([1, 3, 5]);
  });

  test("case 3", async () => {
    let fn = function plusone(n, i) {
      return 42;
    };
    expect(map([10, 20, 30], fn)).toEqual([42, 42, 42]);
  });
});
