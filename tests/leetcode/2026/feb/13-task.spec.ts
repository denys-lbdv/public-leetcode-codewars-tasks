import { majorityElement } from "../../../../src/leetcode/2026/feb/13-task/14-feb-2026-task_13";
import test, { expect } from "@playwright/test";

test.describe("Majority Element", async () => {
  test("case 1", async () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
  });
  test("case 2", async () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });
});
