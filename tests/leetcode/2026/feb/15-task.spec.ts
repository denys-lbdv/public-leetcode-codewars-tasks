import { lengthOfLastWord } from "../../../../src/leetcode/2026/feb/15-task/16-feb-2025-task_15";
import test, { expect } from "@playwright/test";

test.describe("Length of Last Word", async () => {
  test("case 1", async () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
  });
  test("case 2", async () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
  });
  test("case 3", async () => {
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
  });
});
