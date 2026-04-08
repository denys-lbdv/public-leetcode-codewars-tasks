import { expect, test } from "@playwright/test";
import { repeatedSubstringPattern } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-22_8-April/task-22_8-April";

test.describe("Repeated Substring Pattern", async () => {
  test("Repeated Substring Pattern case 1", async () => {
    let s = "abab";
    let output = true;

    expect(repeatedSubstringPattern(s)).toBe(output);
  });
  test("Repeated Substring Pattern case 2", async () => {
    let s = "aba";
    let output = false;

    expect(repeatedSubstringPattern(s)).toBe(output);
  });
  test("Repeated Substring Pattern case 3", async () => {
    let s = "abcabcabcabc";
    let output = true;

    expect(repeatedSubstringPattern(s)).toBe(output);
  });
});
