import { expect, test } from "@playwright/test";
import { exclusiveTime } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-9_18-March/task-9_18-March";

test.describe("Exclusive Time of Functions", async () => {
  test("Build an Array With Stack Operations case 1", async () => {
    let n = 2;
    let logs = ["0:start:0", "1:start:2", "1:end:5", "0:end:6"];
    let output = [3, 4];
    expect(exclusiveTime(n, logs)).toEqual(output);
  });

  test("Build an Array With Stack Operations case 2", async () => {
    let n = 1;
    let logs = [
      "0:start:0",
      "0:start:2",
      "0:end:5",
      "0:start:6",
      "0:end:6",
      "0:end:7",
    ];
    let output = [8];
    expect(exclusiveTime(n, logs)).toEqual(output);
  });

  test("Build an Array With Stack Operations case 3", async () => {
    let n = 2;
    let logs = [
      "0:start:0",
      "0:start:2",
      "0:end:5",
      "1:start:6",
      "1:end:6",
      "0:end:7",
    ];
    let output = [7, 1];
    expect(exclusiveTime(n, logs)).toEqual(output);
  });
});
