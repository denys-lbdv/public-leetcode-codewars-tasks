import { expect, test } from "@playwright/test";
import { maximumProduct } from "../../../../src/leetcode/2026/april/task-7_26-April/task-7_26-April";

test.describe("Maximum Product of Three Numbers", async () => {
  test("Maximum Product of Three Numbers case 1", async () => {
    let nums = [1, 2, 3];
    let output = 6;
    expect(maximumProduct(nums)).toBe(output);
  });

  test("Maximum Product of Three Numbers case 2", async () => {
    let nums = [1, 2, 3, 4];
    let output = 24;
    expect(maximumProduct(nums)).toBe(output);
  });

  test("Maximum Product of Three Numbers case 3", async () => {
    let nums = [-1, -2, -3];
    let output = -6;
    expect(maximumProduct(nums)).toBe(output);
  });

  test("Maximum Product of Three Numbers case 4", async () => {
    let nums = [-100, -98, -1, 2, 3, 4];
    let output = 39200;
    expect(maximumProduct(nums)).toBe(output);
  });

  test("Maximum Product of Three Numbers case 5", async () => {
    let nums = [-100, -2, -3, 1];
    let output = 300;
    expect(maximumProduct(nums)).toBe(output);
  });
});
