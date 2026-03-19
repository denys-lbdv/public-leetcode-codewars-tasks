import { expect, test } from "@playwright/test";
import { finalPrices } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-10_19-March/task-10_19-March";

test.describe("Final Prices With a Special Discount in a Shop", async () => {
  test("Final Prices With a Special Discount in a Shop case 1", async () => {
    let prices = [8, 4, 6, 2, 3];
    let output = [4, 2, 4, 2, 3];
    expect(finalPrices(prices)).toEqual(output);
  });

  test("Final Prices With a Special Discount in a Shop case 2", async () => {
    let prices = [1, 2, 3, 4, 5];
    let output = [1, 2, 3, 4, 5];
    expect(finalPrices(prices)).toEqual(output);
  });

  test("Final Prices With a Special Discount in a Shop case 3", async () => {
    let prices = [8,7,4,2,8,1,7,7,10,1];
    let output = [1,3,2,1,7,0,0,6,9,1];
    expect(finalPrices(prices)).toEqual(output);
  });


});
