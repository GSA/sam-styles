import { test, expect } from "@playwright/test";

// Covers USWDS collection component — items, headings, tags render correctly
// Story: Components/Collection — Default

test.describe("Collection regression", () => {
  test("collection renders list items", async ({ page }) => {
    await page.goto("/iframe.html?id=components-collection--default");
    const items = page.locator(".usa-collection__item");
    await expect(items.first()).toBeVisible();
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });

  test("collection item heading link is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=components-collection--default");
    const heading = page.locator(".usa-collection__heading .usa-link").first();
    await expect(heading).toBeVisible();
  });

  test("collection tag renders with visible text", async ({ page }) => {
    await page.goto("/iframe.html?id=components-collection--default");
    const tag = page.locator(".usa-collection__meta-item.usa-tag").first();
    await expect(tag).toBeVisible();
    const text = await tag.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("collection description text is rendered", async ({ page }) => {
    await page.goto("/iframe.html?id=components-collection--default");
    const description = page.locator(".usa-collection__description").first();
    await expect(description).toBeVisible();
    const text = await description.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });
});
