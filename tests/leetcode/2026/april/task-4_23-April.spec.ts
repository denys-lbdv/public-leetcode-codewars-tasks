import { expect, test } from "@playwright/test";
import { isAnagram } from "../../../../src/leetcode/2026/april/task-4_23-April/task-4_23-April";

test.describe("Valid Anagram", async () => {
  test("Valid Anagram case 1", async () => {
    let s = "anagram";
    let t = "nagaram";
    let output = true;
    expect(isAnagram(s, t)).toBe(output);
  });

  test("Valid Anagram case 2", async () => {
    let s = "rat";
    let t = "car";
    let output = false;
    expect(isAnagram(s, t)).toBe(output);
  });
});
