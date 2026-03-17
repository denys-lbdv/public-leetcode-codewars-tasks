import { expect, test } from "@playwright/test";
import { evalRPN } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-8_17-March/task-8_17-March";

test.describe("Evaluate Reverse Polish Notation", async () => {
  test("Build an Array With Stack Operations case 1", async () => {
    let tokens = ["2", "1", "+", "3", "*"];
    expect(evalRPN(tokens)).toBe(9);
  });

  test("Build an Array With Stack Operations case 2", async () => {
    let tokens = ["4", "13", "5", "/", "+"];
    expect(evalRPN(tokens)).toBe(6);
  });

  test("Build an Array With Stack Operations case 3", async () => {
    let tokens = [
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ];
    expect(evalRPN(tokens)).toBe(22);
  });
});
