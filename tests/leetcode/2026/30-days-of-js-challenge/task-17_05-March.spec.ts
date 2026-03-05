import { TimeLimitedCache } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-17_05-March/task-17_05-March";
import test, { expect } from "@playwright/test";

test.describe("Cache With Time Limit", async () => {
  test("Cache With Time Limit case 1", async () => {
    const timeLimitedCache = new TimeLimitedCache();
    timeLimitedCache.set(1, 42, 1000); // false

    expect(timeLimitedCache.get(1)).toBe(42); // 42
    expect(timeLimitedCache.count()).toBe(1); // 1
  });
});
