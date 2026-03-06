import { debounce } from "../../../../src/leetcode/2026/30-days-of-js-challenge/task-18_06-March/task-18_06-March";
import test, { expect } from "@playwright/test";

test.describe("Debounce", async () => {
  test("Debounce case 1", async () => {
    const log = debounce(console.log, 100);
    log("Hello"); // cancelled
    log("Hello"); // cancelled
    log("Hello"); // Logged at t=100ms
  });
});
