import { canConstruct } from "../../../../src/leetcode/2026/feb/21-task/22-feb-2026-task_21";
import test, { expect } from "@playwright/test";

test.describe("Ransom Note", async () => {
  test("case 1", async () => {
    expect(canConstruct("a", "b")).toBe(false);
  });

  test("case 2", async () => {
    expect(canConstruct("aa", "ab")).toBe(false);
  });

  test("case 3", async () => {
    expect(canConstruct("aa", "aab")).toBe(true);
  });
});
