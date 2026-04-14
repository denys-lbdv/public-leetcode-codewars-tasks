import { expect, test } from "@playwright/test";
import { reverseOnlyLetters } from "../../../../src/leetcode/2026/april/task-2_14-April/task-2_14-April";

test.describe("Reverse Only Letters", async () => {
  test("Reverse Only Letters case 1", async () => {
    let s = "ab-cd";
    let output = "dc-ba";
    expect(reverseOnlyLetters(s)).toBe(output);
  });

  test("Reverse Only Letters case 2", async () => {
    let s = "a-bC-dEf-ghIj";
    let output = "j-Ih-gfE-dCba";
    expect(reverseOnlyLetters(s)).toBe(output);
  });
  test("Reverse Only Letters case 3", async () => {
    let s = "Test1ng-Leet=code-Q!";
    let output = "Qedo1ct-eeLg=ntse-T!";
    expect(reverseOnlyLetters(s)).toBe(output);
  });
});
