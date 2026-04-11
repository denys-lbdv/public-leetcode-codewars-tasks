import { expect, test } from "@playwright/test";
import { repeatedStringMatch } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-24_10-April/task-24_10-April";

test.describe("Repeated String Match", async () => {
  test("Repeated String Match case 1", async () => {
    let s = "abcd";
    let goal = "cdabcdab";
    let output = 3;

    expect(repeatedStringMatch(s, goal)).toBe(output);
  });
  test("Repeated String Match case 2", async () => {
    let s = "a";
    let goal = "aa";
    let output = 2;

    expect(repeatedStringMatch(s, goal)).toBe(output);
  });
  test("Repeated String Match case 3", async () => {
    let s = "aaaaaaaaaaaaaaaaaaaaaab";
    let goal = "ba";
    let output = 2;

    expect(repeatedStringMatch(s, goal)).toBe(output);
  });
  test("Repeated String Match case 4", async () => {
    let s = "a";
    let goal = "a";
    let output = 1;

    expect(repeatedStringMatch(s, goal)).toBe(output);
  });
  test("Repeated String Match case 5", async () => {
    let s = "abcabcabcabc";
    let goal = "abac";
    let output = -1;

    expect(repeatedStringMatch(s, goal)).toBe(output);
  });
});
