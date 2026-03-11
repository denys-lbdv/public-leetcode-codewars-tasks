import { Calculator } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-29_11-March/task-29_11-March";
import test, { expect } from "@playwright/test";

test.describe("Calculator with Method Chaining", async () => {
  test("Calculator with Method Chaining case 1", async () => {
    expect(new Calculator(10).add(5).subtract(7).getResult()).toBe(8);
  });
  test("Calculator with Method Chaining case 2", async () => {
    expect(new Calculator(2).multiply(5).power(2).getResult()).toBe(100);
  });

  test("Calculator with Method Chaining case 3", async () => {
    try {
      expect(new Calculator(20).divide(0).getResult()).toEqual(
        "Division by zero is not allowed",
      );
    } catch (reason) {
      expect(reason.message).toEqual("Division by zero is not allowed");
    }
  });
});
