import { expect, test } from "@playwright/test";
import { numOfUnplacedFruits } from "../../../../src/leetcode/2026/may/task-2_2-May/task-2_2-May";

test.describe("Fruits Into Baskets II", async () => {
  test("Fruits Into Baskets II case 1", async () => {
    let fruits = [4, 2, 5];
    let baskets = [3, 5, 4];
    let output = 1;
    expect(numOfUnplacedFruits(fruits, baskets)).toBe(output);
  });

  test("Fruits Into Baskets II case 2", async () => {
    let fruits = [3,6,1];
    let baskets = [6,4,7];

    let output = 0;
    expect(numOfUnplacedFruits(fruits, baskets)).toBe(output);
  });

});
