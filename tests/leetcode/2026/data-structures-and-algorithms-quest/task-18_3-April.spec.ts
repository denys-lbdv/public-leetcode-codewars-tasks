import { expect, test } from "@playwright/test";
import { isPossible } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-18_3-April/task-18_3-April";

test.describe("Construct Target Array With Multiple Sums", async () => {
  test("Construct Target Array With Multiple Sums case 1", async () => {
    let target = [9, 3, 5];
    let output = true;

    expect(isPossible(target)).toBe(output);
  });
  test("Construct Target Array With Multiple Sums case 2", async () => {
    let target = [1, 1, 1, 2];
    let output = false;

    expect(isPossible(target)).toBe(output);
  });
});
