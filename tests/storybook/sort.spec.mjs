import { test, expect } from "@playwright/test";

test.describe("Sort regression", () => {
  test("Sort story: usa-select is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=miscellaneous-sort--sort");
    const select = page.locator("select.usa-select").first();
    await expect(select).toBeVisible();
  });

  test("Sort story: usa-select has a border-color (not transparent)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=miscellaneous-sort--sort");
    const select = page.locator("select.usa-select").first();
    await expect(select).toBeVisible();
    // usa-select border is drawn via border-color; must not be transparent
    const borderColor = await select.evaluate(
      (el) => getComputedStyle(el).borderColor
    );
    expect(borderColor).not.toBe("rgba(0, 0, 0, 0)");
    expect(borderColor).not.toBe("transparent");
  });

  test("Sort story: sort label has italic font style", async ({ page }) => {
    await page.goto("/iframe.html?id=miscellaneous-sort--sort");
    const label = page.locator("label.usa-label").first();
    await expect(label).toBeVisible();
    // .text-italic { font-style: italic }
    await expect(label).toHaveCSS("font-style", "italic");
  });
});
