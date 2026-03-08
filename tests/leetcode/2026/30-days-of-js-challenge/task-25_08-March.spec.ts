import { join } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-25_08-March/task-25_08-March";
import test, { expect } from "@playwright/test";

test.describe("Join Two Arrays by ID", async () => {
  test("Join Two Arrays by ID case 1", async () => {
    let arr1 = [
      { id: 1, x: 1 },
      { id: 2, x: 9 },
    ];
    let arr2 = [{ id: 3, x: 5 }];

    // expect(join(arr1, arr2)).toEqual([
    //   { id: 1, x: 1 },
    //   { id: 2, x: 9 },
    //   { id: 3, x: 5 },
    // ]);
  });
  test("Join Two Arrays by ID case 2", async () => {
    let arr1 = [
      { id: 1, x: 2, y: 3 },
      { id: 2, x: 3, y: 6 },
    ];
    let arr2 = [
      { id: 2, x: 10, y: 20 },
      { id: 3, x: 0, y: 0 },
    ];

    // expect(join(arr1, arr2)).toEqual([
    //   { id: 1, x: 2, y: 3 },
    //   { id: 2, x: 10, y: 20 },
    //   { id: 3, x: 0, y: 0 },
    // ]);
  });

  test("Join Two Arrays by ID case 3", async () => {
    let arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
    let arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];

    // expect(join(arr1, arr2)).toEqual([
    //   { id: 1, b: { c: 84 }, v: [1, 3], y: 48 },
    // ]);
  });
});
