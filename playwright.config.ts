import { defineConfig, devices, expect } from "@playwright/test";

export default defineConfig({
  timeout: 60000,
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  workers: "90%",
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    /*headless: env.CI ? true : false,*/
    viewport: { width: 1920, height: 1080 },
    actionTimeout: 15000,
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    screenshot: "on",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "unit-tests",
      // Use regExp - https://playwright.dev/docs/api/class-fullproject#full-project-test-match
      // Use site https://regexr.com/ to play with it
      testMatch: "**/*.spec.ts",
    }  ],
});
