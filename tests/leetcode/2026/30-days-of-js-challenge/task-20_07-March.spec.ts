import { isEmpty } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-20_07-March/task-20_07-March";
import test, { expect } from "@playwright/test";

test.describe("Is Object Empty", async () => {
  test("Is Object Empty case 1", async () => {
    expect(isEmpty({"x": 5, "y": 42})).toEqual(false);
  });
  test("Is Object Empty case 2", async () => {
    expect(isEmpty({})).toEqual(true);
  });
  test("Is Object Empty case 3", async () => {
    expect(isEmpty([null, false, 0])).toEqual(false);
  });
});
