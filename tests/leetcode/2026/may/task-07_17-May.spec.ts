import { expect, test } from "@playwright/test";
import { minimumIndex } from "../../../../src/leetcode/2026/may/task-07_17-May/task-07_17-May";

test.describe("Minimum Capacity Box", async () => {
  test("Minimum Capacity Box case 1", async () => {
    let capacity = [1, 5, 3, 7];
    let itemSize = 3;
    let output = 2;
    expect(minimumIndex(capacity, itemSize)).toBe(output);
  });

  test("Minimum Capacity Box case 2", async () => {
    let capacity = [3, 5, 4, 3];
    let itemSize = 2;
    let output = 0;
    expect(minimumIndex(capacity, itemSize)).toBe(output);
  });

    test("Minimum Capacity Box case 3", async () => {
    let capacity = [4];
    let itemSize = 5;
    let output = -1;
    expect(minimumIndex(capacity, itemSize)).toBe(output);
  });
});
