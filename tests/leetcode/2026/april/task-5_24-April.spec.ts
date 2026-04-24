import { expect, test } from "@playwright/test";
import { intersection } from "../../../../src/leetcode/2026/april/task-5_24-April/task-5_24-April";

test.describe("Intersection of Multiple Arrays", async () => {
  test("Intersection of Multiple Arrays case 1", async () => {
    let nums = [
      [3, 1, 2, 4, 5],
      [1, 2, 3, 4],
      [3, 4, 5, 6],
    ];
    let output = [3, 4];
    expect(intersection(nums)).toEqual(output);
  });

  test("Intersection of Multiple Arrays case 2", async () => {
    let nums = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    let output: any = [];
    expect(intersection(nums)).toEqual(output);
  });
});
