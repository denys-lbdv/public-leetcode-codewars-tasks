import { expect, test } from "@playwright/test";
import { smallerNumbersThanCurrent } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-5_14-March/task-5_14-March";

test.describe("How Many Numbers Are Smaller Than the Current Number", async () => {
  test("How Many Numbers Are Smaller Than the Current Number case 1", async () => {
    let nums = [8, 1, 2, 2, 3];
    let expected = [4, 0, 1, 1, 3];
    expect(smallerNumbersThanCurrent(nums)).toEqual(expected);
  });

  test("How Many Numbers Are Smaller Than the Current Number case 2", async () => {
    let nums = [6, 5, 4, 8];
    let expected = [2, 1, 0, 3];
    expect(smallerNumbersThanCurrent(nums)).toEqual(expected);
  });

  test("How Many Numbers Are Smaller Than the Current Number case 3", async () => {
    let nums = [7, 7, 7, 7];
    let expected = [0, 0, 0, 0];
    expect(smallerNumbersThanCurrent(nums)).toEqual(expected);
  });
});
