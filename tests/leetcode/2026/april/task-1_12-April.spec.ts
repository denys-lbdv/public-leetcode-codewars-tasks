import { expect, test } from "@playwright/test";
import { minimumChairs } from "../../../../src/leetcode/2026/april/task-1_12-April/task-1_12-April";

test.describe("Minimum Number of Chairs in a Waiting Room", async () => {
  test("Minimum Number of Chairs in a Waiting Room case 1", async () => {
    let s = "EEEEEEE";
    let output = 7;
    expect(minimumChairs(s)).toBe(output);
  });

  test("Minimum Number of Chairs in a Waiting Room case 2", async () => {
    let s = "ELELEEL";
    let output = 2;
    expect(minimumChairs(s)).toBe(output);
  });
  test("Minimum Number of Chairs in a Waiting Room case 3", async () => {
    let s = "ELEELEELLL";
    let output = 3;
    expect(minimumChairs(s)).toBe(output);
  });
});
