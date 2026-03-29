import { expect, test } from "@playwright/test";
import { largestRectangleArea } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-12_23-March/task-12_23-March";

test.describe("Largest Rectangle in Histogram", async () => {
  test("Largest Rectangle in Histogram case 1", async () => {
    let heights = [2, 1, 5, 6, 2, 3];
    let output = 10;
    expect(largestRectangleArea(heights)).toBe(output);
  });

  test("Largest Rectangle in Histogram case 2", async () => {
    let heights = [2, 4];
    let output = 4;
    expect(largestRectangleArea(heights)).toBe(output);
  });

  test("Largest Rectangle in Histogram case 3", async () => {
    let heights = [0, 9];
    let output = 9;
    expect(largestRectangleArea(heights)).toBe(output);
  });

  test("Largest Rectangle in Histogram case 4", async () => {
    let heights = [1, 2, 3, 4, 5];
    let output = 9;
    expect(largestRectangleArea(heights)).toBe(output);
  });

  test("Largest Rectangle in Histogram case 6", async () => {
    let heights = [4, 2, 0, 3, 2, 5];
    let output = 6;
    expect(largestRectangleArea(heights)).toBe(output);
  });
  test("Largest Rectangle in Histogram case 7", async () => {
    let heights = [3, 6, 5, 7, 4, 8, 1, 0];
    let output = 20;
    expect(largestRectangleArea(heights)).toBe(output);
  });
  test("Largest Rectangle in Histogram case 8", async () => {
    let heights = [3, 5, 5, 2, 5, 5, 6, 6, 4, 4, 1, 1, 2, 5, 5, 6, 6, 4, 1, 3];
    let output = 24;
    expect(largestRectangleArea(heights)).toBe(output);
  });
  test("Largest Rectangle in Histogram case 9", async () => {
    let heights = [1, 1];
    let output = 2;
    expect(largestRectangleArea(heights)).toBe(output);
  });
});
