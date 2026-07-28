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

  test("color swatch cells have a non-transparent background-color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-colors--theme-colors");
    // Each swatch is a <td> inside the color column — the first data cell in each row
    // has an inline background set by the template
    const swatch = page.locator("table.sds-table tbody tr td:first-child").first();
    await expect(swatch).toBeVisible();

    const bg = await swatch.evaluate((el) => getComputedStyle(el).backgroundColor);
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
});
