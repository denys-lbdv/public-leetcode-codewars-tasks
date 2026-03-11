import { ArrayWrapper } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-28_11-March/task-28_11-March";
import test, { expect } from "@playwright/test";

test.describe("Array Wrapper", async () => {
  test("Array Wrapper case 1", async () => {
    const obj1 = new ArrayWrapper([1, 2]);
    const obj2 = new ArrayWrapper([3, 4]);

    expect(obj1 + obj2).toBe(10);
  });
  test("Array Wrapper case 2", async () => {
    const obj = new ArrayWrapper([23, 98, 42, 70]);

    expect(String(obj)).toEqual("[23,98,42,70]");
  });

  test("Array Wrapper case 3", async () => {
    const obj1 = new ArrayWrapper([]);
    const obj2 = new ArrayWrapper([]);

    expect(obj1 + obj2).toBe(0);
  });
});
