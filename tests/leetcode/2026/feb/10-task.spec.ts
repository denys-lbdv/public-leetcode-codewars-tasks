import { findMissingElements } from "../../../../src/leetcode/2026/feb/10-task/12-feb-2025-task_10";
import test, { expect } from "@playwright/test";

test.describe("Find Missing Elements", async () => {
  test("case 1", async () => {
    expect(findMissingElements([1, 4, 2, 5])).toEqual([3]);
  });

  test("case 2", async () => {
    expect(findMissingElements([7, 8, 6, 9])).toEqual([]);
  });

  test("case 3", async () => {
    expect(findMissingElements([5, 1])).toEqual([2, 3, 4]);
  });
});
