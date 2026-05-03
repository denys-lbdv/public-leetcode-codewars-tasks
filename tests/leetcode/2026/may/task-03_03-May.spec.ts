import { expect, test } from "@playwright/test";
import { freqAlphabets } from "../../../../src/leetcode/2026/may/task-03_03-May/task-03_03-May";

test.describe("Decrypt String from Alphabet to Integer Mapping", async () => {
  test("Decrypt String from Alphabet to Integer Mapping case 1", async () => {
    let s = "10#11#12";
    let output = "jkab";
    expect(freqAlphabets(s)).toEqual(output);
  });

  test("Decrypt String from Alphabet to Integer Mapping case 2", async () => {
    let s = "1326#";
    let output = "acz";
    expect(freqAlphabets(s)).toEqual(output);
  });
});
