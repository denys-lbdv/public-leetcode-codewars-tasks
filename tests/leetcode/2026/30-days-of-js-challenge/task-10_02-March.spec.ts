import { once } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-10_02-March/task-10_02-March";
import test, { expect } from "@playwright/test";

test.describe("Allow One Function Call", async () => {
  test("case 1", async () => {
    let fn = (a, b, c) => a + b + c;
    let onceFn = once(fn);

    expect(onceFn(1, 2, 3)).toBe(6); // 6
    expect(onceFn(2, 3, 6)).toBe(undefined); // returns undefined without calling fn
  });
});
