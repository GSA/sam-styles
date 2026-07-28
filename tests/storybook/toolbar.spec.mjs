import { test, expect } from "@playwright/test";

test.describe("Toolbar regression", () => {
  test("Toolbar story: .sds-toolbar is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=miscellaneous-toolbar--toolbar");
    const toolbar = page.locator(".sds-toolbar").first();
    await expect(toolbar).toBeVisible();
  });

  test("Toolbar story: .sds-toolbar__header has a positive width", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=miscellaneous-toolbar--toolbar");
    const header = page.locator(".sds-toolbar__header").first();
    await expect(header).toBeVisible();
    const width = await header.evaluate((el) =>
      parseFloat(getComputedStyle(el).width)
    );
    expect(width).toBeGreaterThan(0);
  });

  test("Toolbar story: .sds-toolbar__content has the hidden attribute by default", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=miscellaneous-toolbar--toolbar");
    const content = page.locator(".sds-toolbar__content").first();
    // The story markup sets hidden="hidden" on the content panel.
    // The [hidden] attribute is present even if CSS doesn't suppress display.
    await expect(content).toBeAttached();
    const hiddenAttr = await content.getAttribute("hidden");
    expect(hiddenAttr).not.toBeNull();
  });
});
