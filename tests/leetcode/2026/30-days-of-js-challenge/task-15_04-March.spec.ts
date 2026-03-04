import { cancellable } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-14_04-March/task-14_04-March";
import test, { expect } from "@playwright/test";

test.describe("Interval Cancellation", async () => {
  test("Interval Cancellation case 1", async () => {
    let fn = (x) => {
      x * 2;
    };
    let args = [4];
    let t = 35;
    const cancelTimeMs = 190;

    let startTime = performance.now();

    setTimeout(cancellable(fn, args, t), cancelTimeMs);

    let endTime = performance.now();

    let executionTime = endTime - startTime;
  });
});
