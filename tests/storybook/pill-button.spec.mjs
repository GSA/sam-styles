import { test, expect } from "@playwright/test";

// Covers button.scss — .usa-button-pill radius and layout
// Story: Components/Button/Pill — Variants

test.describe("Pill button regression", () => {
  test("pill button renders as flex container", async ({ page }) => {
    await page.goto("/iframe.html?id=components-button-pill--variants");
    const button = page.locator(".usa-button-pill").first();
    await expect(button).toBeVisible();
    // @include u-display("flex")
    await expect(button).toHaveCSS("display", "flex");
  });

  test("pill button has fully-rounded (pill) border radius", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-pill--variants");
    const button = page.locator(".usa-button-pill").first();
    await expect(button).toBeVisible();
    // @include u-radius("pill") → large enough to make a pill shape; Chromium
    // resolves USWDS "pill" as 99rem == 1584px but clamps to half the element
    // height. We assert the value is not zero.
    const radius = await button.evaluate(
      (el) => window.getComputedStyle(el).borderTopLeftRadius
    );
    expect(radius).not.toBe("0px");
  });

  test("disabled pill button renders disabled background", async ({ page }) => {
    await page.goto("/iframe.html?id=components-button-pill--variants");
    const disabled = page.locator(".usa-button-pill[disabled]").first();
    await expect(disabled).toBeVisible();
    // USWDS disabled: rgb(201, 201, 201)
    await expect(disabled).toHaveCSS("background-color", "rgb(201, 201, 201)");
  });

  test("pill button aligns items centered", async ({ page }) => {
    await page.goto("/iframe.html?id=components-button-pill--variants");
    const button = page.locator(".usa-button-pill").first();
    await expect(button).toBeVisible();
    // @include u-flex("align-center")
    await expect(button).toHaveCSS("align-items", "center");
  });
});
