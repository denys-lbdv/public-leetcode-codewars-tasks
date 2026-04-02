import { expect, test } from "@playwright/test";
import { kSmallestPairs } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-17_2-April/task-17_2-April";

test.describe("Find K Pairs with Smallest Sums", async () => {
  test("Find K Pairs with Smallest Sums case 1", async () => {
    let nums1 = [1, 7, 11];
    let nums2 = [2, 4, 6];
    let k = 3;
    let output = [
      [1, 2],
      [1, 4],
      [1, 6],
    ];

    expect(kSmallestPairs(nums1, nums2, k)).toEqual(output);
  });
  test("Find K Pairs with Smallest Sums case 2", async () => {
    let nums1 = [1, 1, 2];
    let nums2 = [1, 2, 3];
    let k = 2;
    let output = [
      [1, 1],
      [1, 1],
    ];

    expect(kSmallestPairs(nums1, nums2, k)).toEqual(output);
  });

  
});
