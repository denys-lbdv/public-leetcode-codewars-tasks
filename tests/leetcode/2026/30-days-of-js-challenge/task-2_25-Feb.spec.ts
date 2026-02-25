import { createCounter } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-2_25-Feb/task-2_25-Feb";
import test, { expect } from "@playwright/test";

test.describe("Create Hello World Function", async () => {
  test("case 1", async () => {
    const counter = createCounter(10);
    expect(counter()).toBe(10);
    expect(counter()).toBe(11);
    expect(counter()).toBe(12);
  });
});
