import { expect, test } from "@playwright/test";
import { numberOfLines } from "../../../../src/leetcode/2026/april/task-8_30-April/task-8_30-April";

test.describe("Number of Lines To Write String", async () => {
  test("Number of Lines To Write String case 1", async () => {
    let widths = [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10,
    ];
    let s = "abcdefghijklmnopqrstuvwxyz";
    let output = [3, 60];
    expect(numberOfLines(widths, s)).toEqual(output);
  });

  test("Number of Lines To Write String case 2", async () => {
    let widths = [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10,
    ];
    let s = "bbbcccdddaaa";

    let output = [2, 4];
    expect(numberOfLines(widths, s)).toEqual(output);
  });
});
