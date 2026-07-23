import { test, expect } from "@playwright/test";

test.describe("Input regression", () => {
  test("error input renders error border color", async ({ page }) => {
    await page.goto("/iframe.html?id=form-elements-input--input");
    const input = page.locator(".usa-input--error").first();
    await expect(input).toBeVisible();
    // rgb(181, 9, 9) = USWDS color("error-dark") — the error border token
    await expect(input).toHaveCSS("border-color", "rgb(181, 9, 9)");
  });

  test("error input renders the thin SDS border-width, not the 0.25rem USWDS default", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-input--input");
    const input = page.locator(".usa-input--error").first();
    await expect(input).toBeVisible();
    // `.usa-input--error { border-width: 0.1rem }` — was `0.1rem !important`.
    // USWDS's own `.usa-input--error` sets `border-width: 0.25rem` (4px). This
    // asserts our thinner SDS override still wins the cascade WITHOUT the
    // !important guard: the used border-width must stay well under the 4px
    // USWDS default. (0.1rem = 1.6px, which the browser rounds to a 1px used
    // value — so we assert "< 2px" rather than an exact sub-pixel figure.)
    const borderPx = await input.evaluate((el) =>
      parseFloat(getComputedStyle(el).borderTopWidth)
    );
    expect(borderPx).toBeLessThan(2);
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
