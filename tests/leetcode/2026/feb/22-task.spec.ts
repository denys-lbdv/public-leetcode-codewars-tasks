import { intersection } from "../../../../src/leetcode/2026/feb/22-task/23-feb-2026-task_22";
import test, { expect } from "@playwright/test";

test.describe("Intersection of Two Arrays", async () => {
  test("case 1", async () => {
    expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
  });

  test("case 2", async () => {
    expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
  });
});
