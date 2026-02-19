import { reverseByType } from "../../../../src/leetcode/2026/feb/09-task/12-feb-2026-task9.ts";
import test, { expect } from "@playwright/test";

test.describe("Reverse Letters Then Special Characters in a String", async () => {
  test("case 1", async () => {
    expect(reverseByType(")ebc#da@f(")).toBe("(fad@cb#e)");
  });

  test("case 2", async () => {
    expect(reverseByType("z")).toBe("z");
  });

  test("case 3", async () => {
    expect(reverseByType("!@#$%^&*()")).toBe(")(*&^%$#@!");
  });
});
