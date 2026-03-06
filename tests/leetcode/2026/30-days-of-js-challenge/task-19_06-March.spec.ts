import { promiseAll } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-19_06-March/task-19_06-March";
import test, { expect } from "@playwright/test";

test.describe("Execute Asynchronous Functions in ParallelExecute Asynchronous Functions in Parallel", async () => {
  test("Execute Asynchronous Functions in Parallel case 1", async () => {
    const result = promiseAll([
      () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
      () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
      () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
    ]);
    expect(await result).toEqual([4, 10, 16]);
  });
});
