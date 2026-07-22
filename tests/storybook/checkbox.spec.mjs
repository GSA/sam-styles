import { test, expect } from "@playwright/test";

test.describe("Checkbox regression", () => {
  test("checked checkbox label ::before renders primary background (checkmark fill)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-checkboxes--checkboxes");
    const label = page
      .locator("input[type='checkbox']:checked + .usa-checkbox__label")
      .first();
    await expect(label).toBeVisible();

    // The visual checkmark is on ::before. Verify its background-color via JS.
    // rgb(112, 225, 123) = $theme-color-primary
    const bgColor = await label.evaluate((el) => {
      return window
        .getComputedStyle(el, "::before")
        .getPropertyValue("background-color");
    });
    expect(bgColor).toBe("rgb(112, 225, 123)");
  });

  test("checked checkbox label ::before has a border matching the text color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-checkboxes--checkboxes");
    const label = page
      .locator("input[type='checkbox']:checked + .usa-checkbox__label")
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
