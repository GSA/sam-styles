import { test, expect } from "@playwright/test";

// ─── Colors / Theme Colors ────────────────────────────────────────────────────
// Story: Branding / Colors → ThemeColors
// Template renders an sds-table with color swatches

test.describe("Branding Colors — Theme Colors story", () => {
  test("renders the sds-table element", async ({ page }) => {
    await page.goto("/iframe.html?id=branding-colors--theme-colors");
    const table = page.locator("table.sds-table").first();
    await expect(table).toBeVisible();
  });

  test("color swatch .square-4 has a non-transparent background-color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-colors--theme-colors");
    // Swatches are <div class="square-4 border bg-*"> nested inside the first <td>.
    // The bg-* USWDS utility class sets the background-color on .square-4, not the td.
    const swatch = page.locator("table.sds-table .square-4").first();
    await expect(swatch).toBeVisible();

    const bg = await swatch.evaluate(
      (el) => getComputedStyle(el).backgroundColor
    );
    // Must be any color value — not transparent / rgba(0,0,0,0)
    expect(bg).not.toBe("rgba(0, 0, 0, 0)");
    expect(bg).not.toBe("transparent");
  });
});

// ─── Colors / State Colors ────────────────────────────────────────────────────
// Story: Branding / Colors → StateColors

test.describe("Branding Colors — State Colors story", () => {
  test("renders the state color tokens heading", async ({ page }) => {
    await page.goto("/iframe.html?id=branding-colors--state-colors");
    const heading = page.locator("h2#uswds-state-color-tokens");
    await expect(heading).toBeVisible();
  });

  test("renders an sds-table for state colors", async ({ page }) => {
    await page.goto("/iframe.html?id=branding-colors--state-colors");
    const table = page.locator("table.sds-table").first();
    await expect(table).toBeVisible();
  });

  test("state color swatch .square-4 has a non-transparent background-color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-colors--state-colors");
    // Swatches are <div class="square-4 border bg-*"> — same pattern as theme colors
    const swatch = page.locator("table.sds-table .square-4").first();
    await expect(swatch).toBeVisible();

    const bg = await swatch.evaluate(
      (el) => getComputedStyle(el).backgroundColor
    );
    expect(bg).not.toBe("rgba(0, 0, 0, 0)");
    expect(bg).not.toBe("transparent");
  });
});
