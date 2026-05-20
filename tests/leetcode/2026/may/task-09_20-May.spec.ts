import { expect, test } from "@playwright/test";
import { makeFancyString } from "../../../../src/leetcode/2026/may/task-09_20-May/task-09_20-May";

test.describe("Delete Characters to Make Fancy String", async () => {
  test("Delete Characters to Make Fancy String case 1", async () => {
    let s = "leeetcode";
    let output = "leetcode";
    expect(makeFancyString(s)).toEqual(output);
  });

  test("Delete Characters to Make Fancy String case 2", async () => {
    let s = "aaabaaaa";
    let output = "aabaa";
    expect(makeFancyString(s)).toEqual(output);
  });

  test("Delete Characters to Make Fancy String case 3", async () => {
    let s = "aab";
    let output = "aab";
    expect(makeFancyString(s)).toEqual(output);
  });
  test("Delete Characters to Make Fancy String case 4", async () => {
    let s = "abbcccddddeeeee";
    let output = "abbccddee";
    expect(makeFancyString(s)).toEqual(output);
  });
});
