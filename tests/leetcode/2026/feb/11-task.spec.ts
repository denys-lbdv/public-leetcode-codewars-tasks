import { reverse } from "../../../../src/leetcode/2026/feb/11-task/12-feb-2025-task_11";
import test, { expect } from "@playwright/test";

test.describe("Reverse Integer", async () => {
  test("case 1", async () => {
    expect(reverse(123)).toBe(321);
  });

  test("case 2", async () => {
    expect(reverse(-123)).toBe(-321);
  });

  test("case 3", async () => {
    expect(reverse(120)).toBe(21);
  });

  test("case 4", async () => {
    expect(reverse(1534236469)).toBe(0);
  });
});
