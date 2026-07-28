import { test, expect } from "@playwright/test";

// Covers range-slider.scss — .usa-range input renders, thumb/track get custom styles
// Story: Components/Range Slider — RangeSlider

test.describe("Range slider regression", () => {
  test("range slider input is visible", async ({ page }) => {
    await page.goto(
      "/iframe.html?id=components-range-slider--range-slider"
    );
    const slider = page.locator("input.usa-range[type='range']").first();
    await expect(slider).toBeVisible();
  });

  test("range slider has correct initial value", async ({ page }) => {
    await page.goto(
      "/iframe.html?id=components-range-slider--range-slider"
    );
    const slider = page.locator("input.usa-range[type='range']").first();
    await expect(slider).toBeVisible();
    // RangeSlider.args = { value: "20" }
    await expect(slider).toHaveAttribute("value", "20");
  });

  test("range slider has correct min/max/step attributes", async ({ page }) => {
    await page.goto(
      "/iframe.html?id=components-range-slider--range-slider"
    );
    const slider = page.locator("input.usa-range[type='range']").first();
    await expect(slider).toHaveAttribute("min", "0");
    await expect(slider).toHaveAttribute("max", "100");
    await expect(slider).toHaveAttribute("step", "10");
  });

  test("range slider has usa-range class applied", async ({ page }) => {
    await page.goto(
      "/iframe.html?id=components-range-slider--range-slider"
    );
    const slider = page.locator("input[type='range']").first();
    await expect(slider).toBeVisible();
    // The SCSS is applied via the .usa-range class selector
    await expect(slider).toHaveClass(/usa-range/);
  });
});
