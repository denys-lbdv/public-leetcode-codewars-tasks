import { expect, test } from "@playwright/test";
import { maskPII } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-21_6-April/task-21_6-April";

test.describe("Masking Personal Information", async () => {
  test("Masking Personal Information case 1", async () => {
    let s = "LeetCode@LeetCode.com";
    let output = "l*****e@leetcode.com";

    expect(maskPII(s)).toBe(output);
  });
  test("Masking Personal Information case 2", async () => {
    let s = "AB@qq.com";
    let output = "a*****b@qq.com";

    expect(maskPII(s)).toBe(output);
  });
  test("Masking Personal Information case 3", async () => {
    let s = "1(234)567-890";
    let output = "***-***-7890";

    expect(maskPII(s)).toBe(output);
  });
  test("Masking Personal Information case 4", async () => {
    let s = "86-(10)12345678";
    let output = "+**-***-***-5678";

    expect(maskPII(s)).toBe(output);
  });
  test("Masking Personal Information case 5", async () => {
    let s = "(3906)2 07143 711";
    let output = "+***-***-***-3711";

    expect(maskPII(s)).toBe(output);
  });
});
