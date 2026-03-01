import { compose } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-8_01-March/task-8_01-March";
import test, { expect } from "@playwright/test";

test.describe("Function Composition", async () => {
  test("case 1", async () => {
    let functions = [
      (x) => {
        return x + 1;
      },
      (x) => {
        return x * x;
      },
      (x) => {
        return 2 * x;
      },
    ];
    let x = 4;
    let fff = compose(functions);
    expect(fff(x)).toBe(65);
  });

  test("case 2", async () => {
    let functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
    let x = 1;
    let fff = compose(functions);
    expect(fff(x)).toBe(1000);
  });

  test("case 3", async () => {
    let functions = [];
    let x = 42;
    let fff = compose(functions);
    expect(fff(x)).toBe(42);
  });
});
