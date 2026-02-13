import { letterCombinations } from "../../../../src/leetcode/2026/feb/12-task/13-feb-2025-task_12";
import test, { expect } from "@playwright/test";

test.describe("Letter Combinations of a Phone Number", async () => {
  test("case 1", async () => {
    expect(letterCombinations("23")).toEqual([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ]);
  });
  test("case 2", async () => {
    expect(letterCombinations("2")).toEqual(["a", "b", "c"]);
  });
  test("case 3", async () => {
    expect(letterCombinations("234")).toEqual([
      "adg",
      "adh",
      "adi",
      "aeg",
      "aeh",
      "aei",
      "afg",
      "afh",
      "afi",
      "bdg",
      "bdh",
      "bdi",
      "beg",
      "beh",
      "bei",
      "bfg",
      "bfh",
      "bfi",
      "cdg",
      "cdh",
      "cdi",
      "ceg",
      "ceh",
      "cei",
      "cfg",
      "cfh",
      "cfi",
    ]);
  });
});
