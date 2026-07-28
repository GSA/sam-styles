import { test, expect } from "@playwright/test";

test.describe("AddressForm regression", () => {
  test("form wrapper is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=form-elements-addressform--address-form");
    const wrapper = page.locator(".sds-form-wrapper").first();
    await expect(wrapper).toBeVisible();
  });

  test(".sds-form.usa-form--large has max-width 50rem (SDS form size override)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-addressform--address-form");
    // `.sds-form.usa-form.usa-form--large { max-width: 50rem }` — SDS override.
    // A browser default cannot produce this value; it only applies when the SDS
    // stylesheet loads and the selector matches.
    const form = page.locator(".sds-form.usa-form--large").first();
    await expect(form).toBeVisible();
    await expect(form).toHaveCSS("max-width", "800px"); // 50rem @ 16px root
  });

  test("usa-select renders with appearance: none (USWDS custom-select override)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-addressform--address-form");
    const select = page.locator(".usa-select").first();
    await expect(select).toBeVisible();
    // USWDS replaces the native select arrow with a custom SVG background;
    // this requires `appearance: none` to suppress the OS-native widget.
    await expect(select).toHaveCSS("appearance", "none");
  });

  test("usa-label is rendered with display: block", async ({ page }) => {
    await page.goto("/iframe.html?id=form-elements-addressform--address-form");
    const label = page.locator(".usa-label").first();
    await expect(label).toBeVisible();
    await expect(label).toHaveCSS("display", "block");
  });
});
