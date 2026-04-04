import { expect, test } from "@playwright/test";
import { detectCapitalUse } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-19_4-April/task-19_4-April";

test.describe("Detect Capital", async () => {
  test("Detect Capital case 1", async () => {
    let word = "USA";
    let output = true;

    expect(detectCapitalUse(word)).toBe(output);
  });
  test("Detect Capital case 2", async () => {
    let word = "FlaG";
    let output = false;

    expect(detectCapitalUse(word)).toBe(output);
  });
});
