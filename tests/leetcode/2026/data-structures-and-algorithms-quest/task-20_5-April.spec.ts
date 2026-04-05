import { expect, test } from "@playwright/test";
import { licenseKeyFormatting } from "../../../../src/leetcode/2026/data-structures-and-algorithms-quest/task-20_5-April/task-20_5-April";

test.describe("License Key Formatting", async () => {
  test("License Key Formatting case 1", async () => {
    let s = "5F3Z-2e-9-w";
    let k = 4;
    let output = "5F3Z-2E9W";

    expect(licenseKeyFormatting(s, k)).toBe(output);
  });
  test("License Key Formatting case 2", async () => {
    let s = "2-5g-3-J";
    let k = 2;
    let output = "2-5G-3J";

    expect(licenseKeyFormatting(s, k)).toBe(output);
  });
});
