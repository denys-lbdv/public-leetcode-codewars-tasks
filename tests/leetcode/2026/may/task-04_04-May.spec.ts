import { expect, test } from "@playwright/test";
import { findFinalValue } from "../../../../src/leetcode/2026/may/task-04_04-May/task-04_04-May";

test.describe("Keep Multiplying Found Values by Two", async () => {
  test("Keep Multiplying Found Values by Two case 1", async () => {
    let nums = [5, 3, 6, 1, 12];
    let original = 3;
    let output = 24;
    expect(findFinalValue(nums, original)).toBe(output);
  });

  test("Keep Multiplying Found Values by Two case 2", async () => {
    let nums = [2, 7, 9];
    let original = 4;
    let output = 4;
    expect(findFinalValue(nums, original)).toBe(output);
  });
});
