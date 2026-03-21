import { expect, test } from "@playwright/test";
import { dailyTemperatures } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-11_20-March/task-11_20-March";

test.describe("Daily Temperatures", async () => {
  test("Daily Temperatures case 1", async () => {
    let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
    let output = [1, 1, 4, 2, 1, 1, 0, 0];
    expect(dailyTemperatures(temperatures)).toEqual(output);
  });

  test("Daily Temperatures case 2", async () => {
    let temperatures = [30, 40, 50, 60];
    let output = [1, 1, 1, 0];
    expect(dailyTemperatures(temperatures)).toEqual(output);
  });

  test("Daily Temperatures case 3", async () => {
    let temperatures = [30, 60, 90];
    let output = [1, 1, 0];
    expect(dailyTemperatures(temperatures)).toEqual(output);
  });
});
