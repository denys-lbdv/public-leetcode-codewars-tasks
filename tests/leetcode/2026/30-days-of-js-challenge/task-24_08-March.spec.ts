import { sortBy } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-24_08-March/task-24_08-March";
import test, { expect } from "@playwright/test";

test.describe("Sort By", async () => {
  test("Sort By case 1", async () => {
    let arr = [5, 4, 1, 2, 3];
    let fn = (x) => x;
    sortBy(arr, fn);
    expect(arr).toEqual([1, 2, 3, 4, 5]);
  });
  test("Sort By case 2", async () => {
    let arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
    let fn = (d) => d.x;
    sortBy(arr, fn);
    expect(arr).toEqual([{ x: -1 }, { x: 0 }, { x: 1 }]);
  });
});
