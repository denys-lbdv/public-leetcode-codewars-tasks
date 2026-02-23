import { transpose } from "../../../../src/leetcode/2026/feb/23-task/23-feb-2026-task_23";
import test, { expect } from "@playwright/test";

test.describe("Transpose Matrix", async () => {
  test("case 1", async () => {
    expect(
      transpose([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ]),
    ).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
    ]);
  });

  test("case 2", async () => {
    expect(
      transpose([
        [1, 2, 3],
        [4, 5, 6],
      ]),
    ).toEqual([
      [1, 4],
      [2, 5],
      [3, 6],
    ]);
  });
});
