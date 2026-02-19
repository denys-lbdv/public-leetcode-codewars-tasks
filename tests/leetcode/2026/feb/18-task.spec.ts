import { moveZeroes } from "../../../../src/leetcode/2026/feb/18-task/19-feb-2026-task_18";
import test, { expect } from "@playwright/test";

test.describe("Move Zeroes", async () => {
  test("case 1", async () => {
    let nums=[0, 1, 0, 3, 12];
    moveZeroes(nums);
    expect(nums).toEqual([1,3,12,0,0]);

  });

});
