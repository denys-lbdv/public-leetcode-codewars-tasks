import { expect, test } from "@playwright/test";
import { buildArray } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-7_16-March/task-7_16-March";

test.describe("Build an Array With Stack Operations", async () => {
  test("Build an Array With Stack Operations case 1", async () => {
    let nums = [1, 3];
    let n = 3;
    let expected = ["Push", "Push", "Pop", "Push"];
    expect(buildArray(nums, n)).toEqual(expected);
  });

  test("Build an Array With Stack Operations case 2", async () => {
    let nums = [1, 3];
    let n = 3;
    let expected = ["Push", "Push", "Pop", "Push"];
    expect(buildArray(nums, n)).toEqual(expected);
  });

  test("Build an Array With Stack Operations case 3", async () => {
    let nums = [1, 2];
    let n = 4;
    let expected = ["Push", "Push"];
    expect(buildArray(nums, n)).toEqual(expected);
  });
});
