import { toggleLightBulbs } from "../../../../src/leetcode/2026/feb/24-task/24-feb-2026-task_24";
import test, { expect } from "@playwright/test";

test.describe("Toggle Light Bulbs", async () => {
  test("case 1", async () => {
    expect(toggleLightBulbs([10, 30, 20, 10])).toEqual([20, 30]);
  });

  test("case 2", async () => {
    expect(toggleLightBulbs([100, 100])).toEqual([]);
  });
});
