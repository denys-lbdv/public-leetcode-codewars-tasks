import { chunk } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-21_07-March/task-21_07-March";
import test, { expect } from "@playwright/test";

test.describe("Chunk Array", async () => {
  test("Chunk Array case 1", async () => {
    expect(chunk([], 1)).toEqual([]);
  });
  test("Chunk Array case 2", async () => {
    expect(chunk([1, 2, 3, 4, 5], 1)).toEqual([[1], [2], [3], [4], [5]]);
  });
  test("Chunk Array case 3", async () => {
    expect(chunk([1, 9, 6, 3, 2], 3)).toEqual([
      [1, 9, 6],
      [3, 2],
    ]);
  });
  test("Chunk Array case 4", async () => {
    expect(chunk([8, 5, 3, 2, 6], 6)).toEqual([[8, 5, 3, 2, 6]]);
  });
});
