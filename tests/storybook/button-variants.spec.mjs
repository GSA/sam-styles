import { test, expect } from "@playwright/test";

// Covers the bg-*-lighter button variant rows in button.scss — the rows the
// PR description called "highest-risk".  Each variant had background-color and
// border-color !important removed; these tests confirm the compiled rules still
// produce the correct visible state.
//
// Story: Components/Button/Standard — Variants
// URL:   /iframe.html?id=components-button-standard--variants

test.describe("Button bg-*-lighter variant regression", () => {
  // ── bg-primary-lighter ─────────────────────────────────────────────────────

  test("bg-primary-lighter default button has primary border", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-standard--variants");
    const button = page
      .locator("button.usa-button.bg-primary-lighter:not([disabled])")
      .first();
    await expect(button).toBeVisible();
    // border: color("primary") = green-cool-20v = rgb(112, 225, 123)
    await expect(button).toHaveCSS("border-color", "rgb(112, 225, 123)");
  });

  test("bg-primary-lighter disabled button has white background", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-standard--variants");
    const button = page
      .locator("button.usa-button.bg-primary-lighter[disabled]")
      .first();
    await expect(button).toBeVisible();
    // background-color: color("white") — fails if USWDS re-asserts disabled grey
    await expect(button).toHaveCSS("background-color", "rgb(255, 255, 255)");
    await expect(button).toHaveCSS("box-shadow", "none");
  });

  // ── bg-secondary-lighter ───────────────────────────────────────────────────

  test("bg-secondary-lighter default button has secondary-lighter background", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-standard--variants");
    const button = page
      .locator(
        "button.usa-button.bg-secondary-lighter:not([disabled]):not(.usa-button--hover):not(.usa-button--active)"
      )
      .first();
    await expect(button).toBeVisible();
    // background-color: #adcdff (hardcoded in button.scss) = rgb(173, 205, 255)
    await expect(button).toHaveCSS("background-color", "rgb(173, 205, 255)");
    // border: color("secondary") = blue-warm-50v = rgb(38, 114, 222)
    await expect(button).toHaveCSS("border-color", "rgb(38, 114, 222)");
  });

  test("bg-secondary-lighter disabled button has white background", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-standard--variants");
    const button = page
      .locator("button.usa-button.bg-secondary-lighter[disabled]")
      .first();
    await expect(button).toBeVisible();
    await expect(button).toHaveCSS("background-color", "rgb(255, 255, 255)");
    await expect(button).toHaveCSS("box-shadow", "none");
  });

  // ── bg-base-lighter ────────────────────────────────────────────────────────

  test("bg-base-lighter disabled button has white background", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-standard--variants");
    const button = page
      .locator("button.usa-button.bg-base-lighter[disabled]")
      .first();
    await expect(button).toBeVisible();
    await expect(button).toHaveCSS("background-color", "rgb(255, 255, 255)");
    await expect(button).toHaveCSS("box-shadow", "none");
  });

  // ── bg-accent-cool-lighter ─────────────────────────────────────────────────

  test("bg-accent-cool-lighter default button has accent-cool-light border", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-standard--variants");
    const button = page
      .locator(
        "button.usa-button.bg-accent-cool-lighter:not([disabled]):not(.usa-button--hover):not(.usa-button--active)"
      )
      .first();
    await expect(button).toBeVisible();
    // border: color("accent-cool-light") = blue-10 = rgb(217, 232, 246)
    await expect(button).toHaveCSS("border-color", "rgb(217, 232, 246)");
  });

  test("bg-accent-cool-lighter disabled button has white background", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-standard--variants");
    const button = page
      .locator("button.usa-button.bg-accent-cool-lighter[disabled]")
      .first();
    await expect(button).toBeVisible();
    await expect(button).toHaveCSS("background-color", "rgb(255, 255, 255)");
    await expect(button).toHaveCSS("box-shadow", "none");
  });

  // ── bg-accent-warm-lighter ─────────────────────────────────────────────────

  test("bg-accent-warm-lighter default button has accent-warm-light border", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-standard--variants");
    const button = page
      .locator(
        "button.usa-button.bg-accent-warm-lighter:not([disabled]):not(.usa-button--hover):not(.usa-button--active)"
      )
      .first();
    await expect(button).toBeVisible();
    // border: color("accent-warm-light") = gold-10 = rgb(241, 229, 205)
    await expect(button).toHaveCSS("border-color", "rgb(241, 229, 205)");
  });

  test("bg-accent-warm-lighter disabled button has white background", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-button-standard--variants");
    const button = page
      .locator("button.usa-button.bg-accent-warm-lighter[disabled]")
      .first();
    await expect(button).toBeVisible();
    await expect(button).toHaveCSS("background-color", "rgb(255, 255, 255)");
    await expect(button).toHaveCSS("box-shadow", "none");
  });
});
