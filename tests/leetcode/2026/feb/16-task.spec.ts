import { removeDuplicates } from "../../../../src/leetcode/2026/feb/16-task/17-feb-2025-task_16";
import test, { expect } from "@playwright/test";

test.describe("Remove Duplicates from Sorted Array", async () => {
  test("case 1", async () => {
    expect(removeDuplicates([1,1,2])).toBe(2);
  });
  test("case 2", async () => {
    expect(removeDuplicates([0,0,1,1,1,2,2,3,3,4])).toBe(5);
  });
});
