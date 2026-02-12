import { mirrorDistance } from "../../../../src/leetcode/2026/feb/08-task/11-feb-2025-task8.ts";
import test, { expect } from "@playwright/test";

test.describe("Mirror Distance of an Integer", async () => {
  test("case 1", async () => {
    expect(mirrorDistance(25)).toBe(27);
  });

  test("case 2", async () => {
    expect(mirrorDistance(10)).toBe(9);
  });

  test("case 3", async () => {
    expect(mirrorDistance(7)).toBe(0);
  });
});
