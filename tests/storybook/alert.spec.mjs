import { test, expect } from "@playwright/test";

// Covers alert.scss — .sds-alert default/info/error border-color variants
// Story: Components/Alert — Default

test.describe("Alert regression", () => {
  test("default alert (warning) renders gold border", async ({ page }) => {
    await page.goto("/iframe.html?id=components-alert--default");
    // The story renders info first (index 0); the plain .sds-alert (warning) is at index 1.
    // Use nth(1) to target the un-modified default variant.
    const alert = page.locator(".sds-alert").nth(1);
    await expect(alert).toBeVisible();
    // border: solid 0.1rem color("gold-20v") → rgb(255, 190, 46)
    await expect(alert).toHaveCSS("border-color", "rgb(255, 190, 46)");
  });

  test("info alert renders cyan border", async ({ page }) => {
    await page.goto("/iframe.html?id=components-alert--default");
    const infoAlert = page.locator(".sds-alert.info").first();
    await expect(infoAlert).toBeVisible();
    // &.info { border: solid 0.1rem color("cyan-30v") } → rgb(0, 189, 227)
    await expect(infoAlert).toHaveCSS("border-color", "rgb(0, 189, 227)");
  });

  test("error alert renders red border", async ({ page }) => {
    await page.goto("/iframe.html?id=components-alert--default");
    const errorAlert = page.locator(".sds-alert.error").first();
    await expect(errorAlert).toBeVisible();
    // &.error { border: solid 0.1rem color("red-40v") } — actual rendered value
    await expect(errorAlert).toHaveCSS("border-color", "rgb(251, 90, 71)");
  });

  test("success alert renders green border", async ({ page }) => {
    await page.goto("/iframe.html?id=components-alert--default");
    const successAlert = page.locator(".sds-alert.success").first();
    await expect(successAlert).toBeVisible();
    // &.success { border: solid 0.1rem color("green-cool-40v") } — actual rendered value
    await expect(successAlert).toHaveCSS("border-color", "rgb(0, 169, 28)");
  });

  test("alert renders as flex container", async ({ page }) => {
    await page.goto("/iframe.html?id=components-alert--default");
    const alert = page.locator(".sds-alert").first();
    await expect(alert).toBeVisible();
    // @include u-display("flex")
    await expect(alert).toHaveCSS("display", "flex");
  });
});
