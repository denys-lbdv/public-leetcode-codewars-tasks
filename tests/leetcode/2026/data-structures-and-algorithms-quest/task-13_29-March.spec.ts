import { expect, test } from "@playwright/test";
import { countStudents } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-13_29-March/task-13_29-March";

test.describe("Number of Students Unable to Eat Lunch", async () => {
  test("Number of Students Unable to Eat Lunch case 1", async () => {
    let students = [1, 1, 0, 0];
    let sandwiches = [0, 1, 0, 1];
    let output = 0;
    expect(countStudents(students, sandwiches)).toBe(output);
  });

  test("Number of Students Unable to Eat Lunch case 2", async () => {
    let students = [1, 1, 1, 0, 0, 1];
    let sandwiches = [1, 0, 0, 0, 1, 1];
    let output = 3;
    expect(countStudents(students, sandwiches)).toBe(output);
  });
});
