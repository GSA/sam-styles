import { test, expect } from "@playwright/test";

// Covers button.scss — .sds-button--circle border-radius, dimensions, display
// Story: Components/Button/Circle — Default

test.describe("Circle button regression", () => {
  test("circle button renders as a circle (border-radius: 50%)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-circle--default");
    const button = page.locator(".usa-button.sds-button--circle").first();
    await expect(button).toBeVisible();
    // .sds-button--circle { border-radius: 50% }
    await expect(button).toHaveCSS("border-radius", "50%");
  });

  test("circle button renders as inline-flex", async ({ page }) => {
    await page.goto("/iframe.html?id=components-button-circle--default");
    const button = page.locator(".usa-button.sds-button--circle").first();
    await expect(button).toBeVisible();
    // @include u-display("inline-flex")
    await expect(button).toHaveCSS("display", "inline-flex");
  });

  test("circle button has zero padding", async ({ page }) => {
    await page.goto("/iframe.html?id=components-button-circle--default");
    const button = page.locator(".usa-button.sds-button--circle").first();
    await expect(button).toBeVisible();
    // padding: 0
    await expect(button).toHaveCSS("padding", "0px");
  });

  test("disabled circle button renders disabled background", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-circle--default");
    const disabled = page
      .locator(".usa-button.sds-button--circle.usa-button--disabled")
      .first();
    await expect(disabled).toBeVisible();
    // USWDS disabled: rgb(201, 201, 201)
    await expect(disabled).toHaveCSS("background-color", "rgb(201, 201, 201)");
  });
});
