import { expect, test } from "@playwright/test";
import { timeRequiredToBuy } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-14_30-March/task-14_30-March";

test.describe("Time Needed to Buy Tickets", async () => {
  test("Time Needed to Buy Tickets case 1", async () => {
    let tickets = [2, 3, 2];
    let k = 2;
    let output = 6;
    expect(timeRequiredToBuy(tickets, k)).toBe(output);
  });

  test("Time Needed to Buy Tickets case 2", async () => {
    let tickets = [5, 1, 1, 1];
    let k = 0;
    let output = 8;
    expect(timeRequiredToBuy(tickets, k)).toBe(output);
  });
});
