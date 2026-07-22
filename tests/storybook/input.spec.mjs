import { test, expect } from "@playwright/test";

test.describe("Input regression", () => {
  test("error input renders error border color", async ({ page }) => {
    await page.goto("/iframe.html?id=form-elements-input--input");
    const input = page.locator(".usa-input--error").first();
    await expect(input).toBeVisible();
    // rgb(181, 9, 9) = USWDS color("error-dark") — the error border token
    await expect(input).toHaveCSS("border-color", "rgb(181, 9, 9)");
  });

  test("disabled input renders muted text color and light background", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-input--input");
    const input = page.locator(".usa-input--disabled").first();
    await expect(input).toBeVisible();
    // rgb(69, 69, 64) = USWDS "base-dark" — the disabled text color
    await expect(input).toHaveCSS("color", "rgb(69, 69, 64)");
    // rgb(245, 245, 240) = USWDS color("base-lightest")
    await expect(input).toHaveCSS("background-color", "rgb(245, 245, 240)");
  });
});
