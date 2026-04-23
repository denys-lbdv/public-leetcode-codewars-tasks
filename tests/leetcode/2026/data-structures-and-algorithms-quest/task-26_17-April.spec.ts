import { expect, test } from "@playwright/test";
import { deleteDuplicates } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-26_17-April/task-26_17-April";

test.describe("Remove Duplicates from Sorted List", async () => {
  test("Remove Duplicates from Sorted List case 1", async () => {
    let head = [1, 1, 2];
    let output = [1, 2];

    expect(deleteDuplicates(head)).toEqual(output);
  });
  test("Remove Duplicates from Sorted List case 2", async () => {
    let head = [1, 1, 2, 3, 3];
    let output = [1, 2, 3];

    expect(deleteDuplicates(head)).toEqual(output);
  });
});
