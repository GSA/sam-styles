import { test, expect } from "@playwright/test";

test.describe("Autocomplete regression", () => {
  test("highlighted item renders secondary background and white text", async ({
    page,
  }) => {
    await page.goto(
      "/iframe.html?id=components-autocomplete--auto-complete"
    );
    const item = page.locator(".sds-autocomplete__item--highlighted").first();
    await expect(item).toBeVisible();
    // rgb(38, 114, 222) = USWDS color("secondary") in this theme
    await expect(item).toHaveCSS("background-color", "rgb(38, 114, 222)");
    await expect(item).toHaveCSS("color", "rgb(255, 255, 255)");
  });

  test("selected item renders italic text and auto cursor", async ({
    page,
  }) => {
    await page.goto(
      "/iframe.html?id=components-autocomplete--auto-complete"
    );
    const item = page.locator(".sds-autocomplete__item--selected").first();
    await expect(item).toBeVisible();
    await expect(item).toHaveCSS("font-style", "italic");
    await expect(item).toHaveCSS("cursor", "auto");
  });

  test("disabled item renders auto cursor and base-lightest background", async ({
    page,
  }) => {
    await page.goto(
      "/iframe.html?id=components-autocomplete--auto-complete"
    );
    const item = page.locator(".sds-autocomplete__item--disabled").first();
    await expect(item).toBeVisible();
    await expect(item).toHaveCSS("cursor", "auto");
    // rgb(249, 249, 247) = USWDS color("base-lightest")
    await expect(item).toHaveCSS("background-color", "rgb(249, 249, 247)");
  });
});
