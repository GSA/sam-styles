import { test, expect } from "@playwright/test";

test.describe("Button regression", () => {
  test("primary button (Default story) renders the primary background color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-standard--default");
    const button = page.locator("button.usa-button:not([disabled])").first();
    await expect(button).toBeVisible();
    // rgb(112, 225, 123) = USWDS green-cool-20v = $theme-color-primary in sam-styles/packages/theme/settings.scss
    await expect(button).toHaveCSS("background-color", "rgb(112, 225, 123)");
  });

  test("secondary button renders secondary background color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-standard--secondary");
    const button = page
      .locator("button.usa-button--secondary:not([disabled])")
      .first();
    await expect(button).toBeVisible();
    // rgb(38, 114, 222) = USWDS color("secondary") in this theme
    await expect(button).toHaveCSS("background-color", "rgb(38, 114, 222)");
    await expect(button).toHaveCSS("color", "rgb(255, 255, 255)");
  });

  test("disabled button renders disabled background and no box-shadow", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-standard--default");
    const button = page.locator("button[disabled]").first();
    await expect(button).toBeVisible();
    // rgb(201, 201, 201) = USWDS color("disabled")
    await expect(button).toHaveCSS("background-color", "rgb(201, 201, 201)");
    await expect(button).toHaveCSS("color", "rgb(255, 255, 255)");
    await expect(button).toHaveCSS("box-shadow", "none");
  });

  test("unstyled disabled button has transparent background, no box-shadow, and no text-decoration", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-standard--unstyled");
    const button = page.locator("button[disabled]").first();
    await expect(button).toBeVisible();
    await expect(button).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
    await expect(button).toHaveCSS("box-shadow", "none");
    await expect(button).toHaveCSS("text-decoration", "none");
  });

  test("unstyled button --hover class alias renders transparent background and underline", async ({
    page,
  }) => {
    // Variants story renders static-state examples using the class aliases
    // (.usa-button--unstyled.usa-button--hover) rather than live :hover, so the
    // alias must be preserved for the Storybook static state to render correctly.
    await page.goto("/iframe.html?id=components-button-standard--variants");
    const button = page
      .locator(".usa-button--unstyled.usa-button--hover")
      .first();
    await expect(button).toBeVisible();
    // &.usa-button--hover { @include u-bg("transparent"); text-decoration: underline }
    await expect(button).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
    await expect(button).toHaveCSS("text-decoration-line", "underline");
  });

  test("unstyled button --active class alias renders transparent background and active link color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-standard--variants");
    const button = page
      .locator(".usa-button--unstyled.usa-button--active")
      .first();
    await expect(button).toBeVisible();
    // &.usa-button--active { @include u-bg("transparent"); @include u-text($theme-link-active-color) }
    // $theme-link-active-color = indigo-cool-70 = rgb(55, 66, 116)
    await expect(button).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
    await expect(button).toHaveCSS("color", "rgb(55, 66, 116)");
  });
});
