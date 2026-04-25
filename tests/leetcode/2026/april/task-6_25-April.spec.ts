import { expect, test } from "@playwright/test";
import { maxContainers } from "../../../../src/leetcode/2026/april/task-6_25-April/task-6_25-April";

test.describe("Maximum Containers on a Ship", async () => {
  test("Maximum Containers on a Ship case 1", async () => {
    let n = 2;
    let w = 3;
    let maxWeight = 15;
    let output = 4;
    expect(maxContainers(n, w, maxWeight)).toBe(output);
  });

  test("Maximum Containers on a Ship case 2", async () => {
    let n = 3;
    let w = 5;
    let maxWeight = 20;
    let output = 4;
    expect(maxContainers(n, w, maxWeight)).toBe(output);
  });
});
