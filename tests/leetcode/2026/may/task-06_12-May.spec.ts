import { expect, test } from "@playwright/test";
import { uncommonFromSentences } from "../../../../src/leetcode/2026/may/task-06_12-May/task-06_12-May";

test.describe("Uncommon Words from Two Sentences", async () => {
  test("Uncommon Words from Two Sentences case 1", async () => {
    let s1 = "this apple is sweet";
    let s2 = "this apple is sour";
    let output = ["sweet", "sour"];
    expect(uncommonFromSentences(s1, s2)).toEqual(output);
  });

  test("Uncommon Words from Two Sentences case 2", async () => {
    let s1 = "apple apple";
    let s2 = "banana";
    let output = ["banana"];
    expect(uncommonFromSentences(s1, s2)).toEqual(output);
  });
});
