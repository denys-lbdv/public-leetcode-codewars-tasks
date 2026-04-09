import { expect, test } from "@playwright/test";
import { rotateString } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-23_9-April/task-23_9-April";

test.describe("Rotate String", async () => {
  test("Rotate String case 1", async () => {
    let s = "abcde";
    let goal = "cdeab";
    let output = true;

    expect(rotateString(s, goal)).toBe(output);
  });
  test("Rotate String case 2", async () => {
    let s = "abcde";
    let goal = "abced";
    let output = false;

    expect(rotateString(s, goal)).toBe(output);
  });
});
