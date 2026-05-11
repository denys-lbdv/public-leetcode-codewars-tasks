import { expect, test } from "@playwright/test";
import { fairCandySwap } from "../../../../src/leetcode/2026/may/task-05_07-May/task-05_07-May";

test.describe("Fair Candy Swap", async () => {
  test("Fair Candy Swap case 1", async () => {
    let aliceSizes = [1, 1];
    let bobSizes = [2, 2];
    let output = [1, 2];
    expect(fairCandySwap(aliceSizes, bobSizes)).toEqual(output);
  });

  test("Fair Candy Swap case 2", async () => {
    let aliceSizes = [1, 2];
    let bobSizes = [2, 3];
    let output = [1, 2];
    expect(fairCandySwap(aliceSizes, bobSizes)).toEqual(output);
  });

  test("Fair Candy Swap case 3", async () => {
    let aliceSizes = [2];
    let bobSizes = [1, 3];
    let output = [2, 3];
    expect(fairCandySwap(aliceSizes, bobSizes)).toEqual(output);
  });
});
