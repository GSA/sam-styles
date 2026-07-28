import { test, expect } from "@playwright/test";

test.describe("Dropdown regression", () => {
  test("usa-select is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=form-elements-dropdown--dropdown");
    const select = page.locator(".usa-select").first();
    await expect(select).toBeVisible();
  });

  test("usa-select renders with appearance: none (USWDS custom-select override)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-dropdown--dropdown");
    const select = page.locator(".usa-select").first();
    await expect(select).toBeVisible();
    // USWDS replaces the native select arrow with a custom SVG background;
    // this requires `appearance: none` to suppress the OS-native widget.
    await expect(select).toHaveCSS("appearance", "none");
  });

  test("small dropdown label is smaller than standard label", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-dropdown--dropdown");
    const standardLabel = page.locator(".usa-label").first();
    const smallLabel = page.locator(".usa-label--sm").first();
    await expect(standardLabel).toBeVisible();
    await expect(smallLabel).toBeVisible();

    const standardSize = await standardLabel.evaluate((el) =>
      parseFloat(getComputedStyle(el).fontSize)
    );
    const smallSize = await smallLabel.evaluate((el) =>
      parseFloat(getComputedStyle(el).fontSize)
    );
    // .usa-label--sm should render at a reduced font size
    expect(smallSize).toBeLessThan(standardSize);
  });

  test("usa-form has max-width set (USWDS form width constraint)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-dropdown--dropdown");
    const form = page.locator(".usa-form").first();
    await expect(form).toBeVisible();
    const maxWidth = await form.evaluate((el) =>
      getComputedStyle(el).maxWidth
    );
    // USWDS sets a max-width on .usa-form (e.g. 30rem / 32rem)
    expect(maxWidth).not.toBe("none");
  });
});
