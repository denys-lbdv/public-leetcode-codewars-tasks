import { expect, test } from "@playwright/test";
import { repeatedNTimes } from "../../../../src/leetcode/2026/may/task-01_01-May/task-1_1-May";

test.describe("N-Repeated Element in Size 2N Array", async () => {
  test("N-Repeated Element in Size 2N Array case 1", async () => {
    let nums = [1, 2, 3, 3];
    let output = 3;
    expect(repeatedNTimes(nums)).toBe(output);
  });

  test("N-Repeated Element in Size 2N Array case 2", async () => {
    let nums = [2, 1, 2, 5, 3, 2];

    let output = 2;
    expect(repeatedNTimes(nums)).toBe(output);
  });

  test("N-Repeated Element in Size 2N Array case 3", async () => {
    let nums = [5, 1, 5, 2, 5, 3, 5, 4];

    let output = 5;
    expect(repeatedNTimes(nums)).toBe(output);
  });
});
