import { expect, test } from "@playwright/test";
import { findDisappearedNumbers } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-6_14-March/task-6_14-March";

test.describe("Find All Numbers Disappeared in an Array", async () => {
  test("Find All Numbers Disappeared in an Array case 1", async () => {
    let nums = [4, 3, 2, 7, 8, 2, 3, 1];
    let expected = [5, 6];
    expect(findDisappearedNumbers(nums)).toEqual(expected);
  });

  test("Find All Numbers Disappeared in an Array case 2", async () => {
    let nums = [1, 1];
    let expected = [2];
    expect(findDisappearedNumbers(nums)).toEqual(expected);
  });
});
