import { test, expect } from "@playwright/test";

test.describe("Radio regression", () => {
  test("checked radio label ::before renders primary background (dot fill)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-radio--radio");
    const label = page
      .locator("input[type='radio']:checked + .usa-radio__label")
      .first();
    await expect(label).toBeVisible();

    // The visual dot is on ::before. Verify its background-color via JS.
    // rgb(112, 225, 123) = $theme-color-primary
    const bgColor = await label.evaluate((el) => {
      return window
        .getComputedStyle(el, "::before")
        .getPropertyValue("background-color");
    });
    expect(bgColor).toBe("rgb(112, 225, 123)");
  });

  test("checked radio label ::before has a border in ink color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-radio--radio");
    const label = page
      .locator("input[type='radio']:checked + .usa-radio__label")
      .first();
    await expect(label).toBeVisible();

    const borderColor = await label.evaluate((el) => {
      return window
        .getComputedStyle(el, "::before")
        .getPropertyValue("border-color");
    });
    // rgb(46, 46, 42) = USWDS "ink" token
    expect(borderColor).toBe("rgb(46, 46, 42)");
  });
});
