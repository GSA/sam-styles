import { defineConfig } from "@playwright/test";
import baseConfig from "./playwright.config.mjs";

export default defineConfig({
  ...baseConfig,
  testDir: "./tests/accessibility",
  timeout: 600_000,
  fullyParallel: false,
  workers: 1,
});
