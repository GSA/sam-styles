import { test, expect } from "@playwright/test";

// Covers USWDS summary-box component — structure, heading, link color
// Story: Components/SummaryBox — SummaryBox

test.describe("Summary box regression", () => {
  test("summary box is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=components-summarybox--summary-box");
    const box = page.locator(".usa-summary-box").first();
    await expect(box).toBeVisible();
  });

  test("summary box heading is rendered with text", async ({ page }) => {
    await page.goto("/iframe.html?id=components-summarybox--summary-box");
    const heading = page.locator(".usa-summary-box__heading").first();
    await expect(heading).toBeVisible();
    const text = await heading.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("summary box link has non-transparent color", async ({ page }) => {
    await page.goto("/iframe.html?id=components-summarybox--summary-box");
    const link = page.locator(".usa-summary-box__link").first();
    await expect(link).toBeVisible();
    // USWDS summary-box links inherit the ink/secondary color — just confirm
    // it is not transparent (i.e., CSS color is applied)
    const color = await link.evaluate(
      (el) => window.getComputedStyle(el).color
    );
    expect(color).not.toBe("rgba(0, 0, 0, 0)");
    expect(color).not.toBe("transparent");
  });

  test("summary box list items are rendered", async ({ page }) => {
    await page.goto("/iframe.html?id=components-summarybox--summary-box");
    const items = page.locator(".usa-summary-box__text .usa-list li");
    await expect(items.first()).toBeVisible();
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });
});
