import { expectT } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-3_25-Feb/task-3_25-Feb";
import test, { expect } from "@playwright/test";

test.describe("Create Hello World Function", async () => {
  test("case 1", async () => {
    expect(expectT(5).toBe(5)).toBe(true);
  });
});
