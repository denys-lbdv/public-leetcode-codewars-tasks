import { wordBreak } from "../../../../src/leetcode/2026/feb/17-task/18-feb-2026-task_17";
import test, { expect } from "@playwright/test";

test.describe("Word Break", async () => {
  test("case 1", async () => {
    expect(wordBreak("leetcode", ["leet", "code"])).toBe(true);
  });
  test("case 2", async () => {
    expect(wordBreak("applepenapple", ["apple", "pen"])).toBe(true);
  });

  test("case 3", async () => {
    expect(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])).toBe(
      false,
    );
  });
  test("case 4", async () => {
    expect(wordBreak("a", ["b"])).toBe(false);
  });
  test("case 5", async () => {
    expect(wordBreak("bb", ["a", "b", "bbb", "bbbb"])).toBe(true);
  });

  test("case 6", async () => {
    expect(wordBreak("abcd", ["a", "abc", "b", "cd"])).toBe(true);
  });

  test("case 7", async () => {
    expect(wordBreak("cars", ["car", "ca", "rs"])).toBe(true);
  });
  test("case 8", async () => {
    expect(wordBreak("cbca", ["bc","ca"])).toBe(false);
  });
  test("case 9", async () => {
    expect(wordBreak("dogs", ["dog","s","gs"])).toBe(true);
  });
});
