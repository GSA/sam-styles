import { test, expect } from "@playwright/test";

test.describe("Search Layout regression", () => {
  test("SearchLayout story: .sds-sidepanel is visible", async ({ page }) => {
    await page.goto(
      "/iframe.html?id=miscellaneous-searchlayout--search-layout"
    );
    const panel = page.locator(".sds-sidepanel").first();
    await expect(panel).toBeVisible();
  });

  test("SearchLayout story: accent-cool header has a non-transparent background-color", async ({
    page,
  }) => {
    await page.goto(
      "/iframe.html?id=miscellaneous-searchlayout--search-layout"
    );
    // .sds-card__header--accent-cool is inside .mobile-only (zero height at desktop),
    // so we measure background via JS rather than asserting visibility.
    const header = page.locator(".sds-card__header--accent-cool").first();
    await expect(header).toBeAttached();
    const bg = await header.evaluate(
      (el) => getComputedStyle(el).backgroundColor
    );
    // .sds-card__header--accent-cool sets a themed background; must not be transparent
    expect(bg).not.toBe("rgba(0, 0, 0, 0)");
  });

  test("SearchLayout story: side-panel contains a sidenav with items", async ({
    page,
  }) => {
    await page.goto(
      "/iframe.html?id=miscellaneous-searchlayout--search-layout"
    );
    const items = page.locator(".usa-sidenav .usa-sidenav__item");
    await expect(items.first()).toBeVisible();
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });
});
