import { expect, test } from "@playwright/test";
import { plusOne } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-25_11-April/task-25_11-April";

test.describe("Plus One", async () => {
  test("Plus One case 1", async () => {
    let digits = [1, 2, 3];
    let output = [1, 2, 4];

    expect(plusOne(digits)).toEqual(output);
  });
});
