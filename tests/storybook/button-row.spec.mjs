import { test, expect } from "@playwright/test";

// Covers button-row.scss — .sds-button-row flex layout and centering
// Story: Components/ButtonRow — Default

test.describe("Button row regression", () => {
  test("button row renders as flex container", async ({ page }) => {
    await page.goto("/iframe.html?id=components-buttonrow--default");
    const row = page.locator(".sds-button-row").first();
    await expect(row).toBeVisible();
    // @include u-display("flex")
    await expect(row).toHaveCSS("display", "flex");
  });

  test("button row uses row flex-direction", async ({ page }) => {
    await page.goto("/iframe.html?id=components-buttonrow--default");
    const row = page.locator(".sds-button-row").first();
    await expect(row).toBeVisible();
    // @include u-flex("row")
    await expect(row).toHaveCSS("flex-direction", "row");
  });

  test("button row justifies content to center", async ({ page }) => {
    await page.goto("/iframe.html?id=components-buttonrow--default");
    const row = page.locator(".sds-button-row").first();
    await expect(row).toBeVisible();
    // @include u-flex("justify-center")
    await expect(row).toHaveCSS("justify-content", "center");
  });

  test("button row wraps its flex children", async ({ page }) => {
    await page.goto("/iframe.html?id=components-buttonrow--default");
    const row = page.locator(".sds-button-row").first();
    await expect(row).toBeVisible();
    // @include u-flex("wrap")
    await expect(row).toHaveCSS("flex-wrap", "wrap");
  });
});
