import { createCounter } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-4_25-Feb/task-4_25-Feb";
import test, { expect } from "@playwright/test";

test.describe("Counter II", async () => {
  test("case 1", async () => {
    const counter = createCounter(5);
    expect(counter.increment()).toBe(6);
    expect(counter.reset()).toBe(5);
    expect(counter.decrement()).toBe(4);
  });
});
