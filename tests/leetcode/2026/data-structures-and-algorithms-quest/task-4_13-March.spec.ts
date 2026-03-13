import { expect, test } from "@playwright/test";
import { findErrorNums } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-4_13-March/task-4_13-March";

test.describe("Set Mismatch", async () => {
  test("Set Mismatch case 1", async () => {
    let nums = [1, 2, 2, 4];
    expect(findErrorNums(nums)).toEqual([2, 3]);
  });

  test("Set Mismatch case 2", async () => {
    let nums = [1, 1];
    expect(findErrorNums(nums)).toEqual([1, 2]);
  });

  test("Set Mismatch case 3", async () => {
    let nums = [2, 2];
    expect(findErrorNums(nums)).toEqual([2, 1]);
  });

    test("Set Mismatch case 4", async () => {
    let nums = [3,2,3,4,6,5];
    expect(findErrorNums(nums)).toEqual([3, 1]);
  });

      test("Set Mismatch case 5", async () => {
    let nums = [1,5,3,2,2,7,6,4,8,9];
    expect(findErrorNums(nums)).toEqual([2,10]);
  });
});
