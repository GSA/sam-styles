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

  test("checkbox wrapper has a transparent background (SDS override wins without !important)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-checkboxes--checkboxes");
    const wrapper = page.locator(".usa-checkbox").first();
    await expect(wrapper).toBeVisible();
    // `.usa-checkbox { background-color: transparent }` — was `transparent !important`.
    // USWDS ships `.usa-checkbox { background: #fff }`; this confirms the SDS
    // override still clears it to transparent without the !important guard.
    await expect(wrapper).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  });

  test("checked checkbox label ::before renders the checkmark box-shadow ring", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-checkboxes--checkboxes");
    const label = page
      .locator("input[type='checkbox']:checked + .usa-checkbox__label")
      .first();
    await expect(label).toBeVisible();
    // `::before { box-shadow: 0 0 0 2px #70e17b }` — was `... !important`.
    // Confirms the 2px primary-green ring still renders without the guard.
    const boxShadow = await label.evaluate((el) =>
      window.getComputedStyle(el, "::before").getPropertyValue("box-shadow")
    );
    // rgb(112, 225, 123) = $theme-color-primary
    expect(boxShadow).toContain("rgb(112, 225, 123)");
    expect(boxShadow).not.toBe("none");
  });
});
