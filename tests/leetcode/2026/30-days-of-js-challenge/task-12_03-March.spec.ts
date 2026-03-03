import { addTowPromises } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-12_03-March/task-12_03-March";
import test, { expect } from "@playwright/test";

test.describe("Add Two Promises", async () => {
  test("case 1", async () => {
    let p1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
    let p2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

    expect(await addTowPromises(p1, p2)).toBe(7);
  });
});
