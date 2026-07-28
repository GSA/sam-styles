import { test, expect } from "@playwright/test";

// ─── Icons / Icon Library ─────────────────────────────────────────────────────
// Story: Branding / Icons → IconLibrary
// Template renders custom SDS icons (.sds) and Bootstrap Icons (.bi)

test.describe("Branding Icons — Icon Library story", () => {
  test("SDS icon elements are present in the DOM (aria-hidden)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-icons--icon-library");
    // SDS custom icons use <i class="sds" aria-hidden="true"> — not visible to AT,
    // but present in the DOM. Assert they exist and are attached.
    const icon = page.locator("i.sds").first();
    await expect(icon).toBeAttached();
    const count = await page.locator("i.sds").count();
    expect(count).toBeGreaterThan(0);
  });

  test("Bootstrap icon renders with a non-zero width (font loaded)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-icons--icon-library");
    const biIcon = page.locator("i.bi").first();
    await expect(biIcon).toBeVisible();

    const width = await biIcon.evaluate(
      (el) => el.getBoundingClientRect().width
    );
    expect(width).toBeGreaterThan(0);
  });
});
