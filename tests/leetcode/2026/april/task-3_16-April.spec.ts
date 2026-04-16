import { expect, test } from "@playwright/test";
import { smallestEvenMultiple } from "../../../../src/leetcode/2026/april/task-3_16-April/task-3_16-April";

test.describe("Smallest Even Multiple", async () => {
  test("Smallest Even Multiple case 1", async () => {
    let s = 5;
    let output = 10;
    expect(smallestEvenMultiple(s)).toBe(output);
  });

  test("Smallest Even Multiple case 2", async () => {
    let s = 6;
    let output = 6;
    expect(smallestEvenMultiple(s)).toBe(output);
  });
});
