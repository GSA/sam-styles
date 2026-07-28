import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/storybook",
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  fullyParallel: true,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://127.0.0.1:6007",
    trace: "on-first-retry",
  },
  webServer: {
    command:
      "rm -rf _site && npm run build:storybook -- --quiet && npx http-server _site --port 6007 --silent",
    // Probe iframe.html, not "/". Storybook writes _site/index.html during the
    // fast manager phase (~1s) but the story iframe bundles and iframe.html only
    // land at the end of the preview phase (~9s). A "/" readiness check goes
    // green ~8s too early, so tests would hit /iframe.html?id=... before it
    // exists and every locator 404s ("element(s) not found"). iframe.html is the
    // last artifact written, so it is a correct "build fully done" signal.
    url: "http://127.0.0.1:6007/iframe.html",
    reuseExistingServer: !process.env.CI,
    timeout: 300_000,
    env: {
      NODE_OPTIONS: "--max_old_space_size=8192",
    },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
