import { memoize } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-11_02-March/task-11_02-March";
import test, { expect } from "@playwright/test";

test.describe("Memorize", async () => {
  test("case 1", async () => {
    let callCount = 0;
    const memoizedFn = memoize(function (a, b) {
      callCount++;
      return a + b;
    });
    expect(memoizedFn(2, 3)).toBe(5);
    expect(memoizedFn(2, 3)).toBe(5);
    expect(callCount).toBe(1);
  });
});
