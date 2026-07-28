import { test, expect } from "@playwright/test";

test.describe("AddressForm regression", () => {
  test("form wrapper is visible", async ({ page }) => {
    await page.goto(
      "/iframe.html?id=form-elements-addressform--address-form"
    );
    const wrapper = page.locator(".sds-form-wrapper").first();
    await expect(wrapper).toBeVisible();
  });

  test("usa-form renders as a block element", async ({ page }) => {
    await page.goto(
      "/iframe.html?id=form-elements-addressform--address-form"
    );
    const form = page.locator(".usa-form").first();
    await expect(form).toBeVisible();
    await expect(form).toHaveCSS("display", "block");
  });

  test("usa-select renders with appearance: none (USWDS custom-select override)", async ({
    page,
  }) => {
    await page.goto(
      "/iframe.html?id=form-elements-addressform--address-form"
    );
    const select = page.locator(".usa-select").first();
    await expect(select).toBeVisible();
    // USWDS replaces the native select arrow with a custom SVG background;
    // this requires `appearance: none` to suppress the OS-native widget.
    await expect(select).toHaveCSS("appearance", "none");
  });

  test("usa-label is rendered with display: block", async ({ page }) => {
    await page.goto(
      "/iframe.html?id=form-elements-addressform--address-form"
    );
    const label = page.locator(".usa-label").first();
    await expect(label).toBeVisible();
    await expect(label).toHaveCSS("display", "block");
  });
});
