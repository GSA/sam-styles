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

  test("radio wrapper has a transparent background (SDS override wins without !important)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-radio--radio");
    const wrapper = page.locator(".usa-radio").first();
    await expect(wrapper).toBeVisible();
    // `.usa-radio { background-color: transparent }` — was `transparent !important`.
    // USWDS ships `.usa-radio { background: #fff }`; this confirms the SDS
    // override still clears it to transparent without the !important guard.
    await expect(wrapper).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  });

  test("checked radio label ::before renders the dot box-shadow ring", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-radio--radio");
    const label = page
      .locator("input[type='radio']:checked + .usa-radio__label")
      .first();
    await expect(label).toBeVisible();
    // `::before { box-shadow: 0 0 0 2px #70e17b, inset 0 0 0 2px white }`
    // — was `... !important`. Confirms the dot ring still renders without
    // the guard: both the 2px primary-green ring and the inset white gap.
    const boxShadow = await label.evaluate((el) =>
      window.getComputedStyle(el, "::before").getPropertyValue("box-shadow")
    );
    // rgb(112, 225, 123) = $theme-color-primary; "inset" = the white centre gap
    expect(boxShadow).toContain("rgb(112, 225, 123)");
    expect(boxShadow).toContain("inset");
  });
});
