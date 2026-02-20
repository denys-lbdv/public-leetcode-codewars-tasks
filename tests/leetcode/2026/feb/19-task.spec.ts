import { merge } from "../../../../src/leetcode/2026/feb/19-task/20-feb-2026-task_19";
import test, { expect } from "@playwright/test";

test.describe("Move Zeroes", async () => {
  test("case 1", async () => {
    let nums1 = [1, 2, 3, 0, 0, 0];
    merge(nums1, 3, [2, 5, 6], 3);
    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  test("case 2", async () => {
    let nums1 = [1];
    merge(nums1, 1, [], 0);
    expect(nums1).toEqual([1]);
  });

  test("case 3", async () => {
    let nums1 = [0];
    merge(nums1, 0, [1], 1);
    expect(nums1).toEqual([1]);
  });
});
