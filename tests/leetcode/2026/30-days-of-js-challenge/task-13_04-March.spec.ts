import { sleep } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-13_04-March/task-13_04-March";
import test, { expect } from "@playwright/test";

test.describe("Sleep", async () => {
  test("Sleep case 1", async () => {
    let startTime = Date.now();
    await sleep(100);
    let endTime = Date.now();
    expect(endTime - startTime).toBeGreaterThanOrEqual(100);
  });
});
