import { expect, test } from "@playwright/test";
import { lastStoneWeight } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-16_1-April/task-16_1-April";

test.describe("Last Stone Weight", async () => {
  test("Last Stone Weight case 1", async () => {
    let stones = [2, 7, 4, 1, 8, 1];
    let output = 1;

    expect(lastStoneWeight(stones)).toBe(output);
  });
  test("Last Stone Weight case 2", async () => {
    let stones = [1];
    let output = 1;

    expect(lastStoneWeight(stones)).toBe(output);
  });
});
