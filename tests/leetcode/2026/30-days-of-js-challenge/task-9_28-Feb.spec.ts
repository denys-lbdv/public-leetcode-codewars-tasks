import { argumentsLength } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-9_28-Feb/task-9_28-Feb";
import test, { expect } from "@playwright/test";

test.describe("Return Length of Arguments Passed", async () => {
  test("case 1", async () => {
    expect(argumentsLength(5)).toBe(1);
  });

  test("case 2", async () => {
    expect(argumentsLength({}, null, "3")).toBe(3);
  });

});
