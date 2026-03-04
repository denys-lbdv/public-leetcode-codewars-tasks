import { cancellable } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-14_04-March/task-14_04-March";
import test, { expect } from "@playwright/test";

test.describe("Timeout Cancellation", async () => {
  test("Timeout Cancellation case 1", async () => {
    let fn = (x) => x * 5;
    let args = [2];
    let t = 20;
    const cancelTimeMs = 50;

    let startTime = performance.now();

    setTimeout(cancellable(fn, args, t), cancelTimeMs);

    let endTime = performance.now();

    let executionTime = endTime - startTime;

    expect(executionTime).toBeLessThan(cancelTimeMs);
  });
});
