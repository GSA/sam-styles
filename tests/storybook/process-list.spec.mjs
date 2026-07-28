import { test, expect } from "@playwright/test";

// Covers USWDS process-list component — items, headings, counter pseudo-element
// Story: Components/ProcessList — ProcessList

test.describe("Process list regression", () => {
  test("process list renders ordered list items", async ({ page }) => {
    await page.goto("/iframe.html?id=components-processlist--process-list");
    const items = page.locator(".usa-process-list__item");
    await expect(items.first()).toBeVisible();
    const count = await items.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("process list item heading is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=components-processlist--process-list");
    const heading = page.locator(".usa-process-list__heading").first();
    await expect(heading).toBeVisible();
    const text = await heading.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("process list item counter ::before has non-empty content", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-processlist--process-list");
    const item = page.locator(".usa-process-list__item").first();
    await expect(item).toBeVisible();
    // USWDS renders a step counter using CSS counters on ::before
    const content = await item.evaluate((el) =>
      window.getComputedStyle(el, "::before").getPropertyValue("content")
    );
    // Should not be "none" or empty — USWDS counter(section) produces a quoted string
    expect(content).not.toBe("none");
    expect(content).not.toBe('""');
    expect(content.trim().length).toBeGreaterThan(0);
  });

  test("process list item has left padding for the counter track", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-processlist--process-list");
    const item = page.locator(".usa-process-list__item").first();
    await expect(item).toBeVisible();
    // USWDS adds significant padding-left to make room for the step counter
    const paddingLeft = await item.evaluate((el) =>
      parseFloat(window.getComputedStyle(el).paddingLeft)
    );
    expect(paddingLeft).toBeGreaterThan(0);
  });
});
