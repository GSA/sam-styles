import { test, expect } from "@playwright/test";

test.describe("Search regression", () => {
  test("search form is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=form-elements-search--search");
    const form = page.locator(".usa-search").first();
    await expect(form).toBeVisible();
  });

  test("search submit button renders indigo-cool-60 background (SDS override)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-search--search");
    const button = page.locator(".usa-search [type='submit']").first();
    await expect(button).toBeVisible();
    // `u-bg("indigo-cool-60")` = rgb(63, 87, 166) — the SDS search button color
    // (USWDS maps indigo-cool-60 to #3f57a6)
    await expect(button).toHaveCSS("background-color", "rgb(63, 87, 166)");
  });

  test("search input has box-shadow applied (SDS depth token)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-search--search");
    const input = page.locator(".usa-search [type='search']").first();
    await expect(input).toBeVisible();
    // `u-shadow(3)` applies a non-none box-shadow to the search input
    const shadow = await input.evaluate((el) =>
      getComputedStyle(el).boxShadow
    );
    expect(shadow).not.toBe("none");
  });

  test("small search form has display: flex (SDS flex-row override)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-search--search");
    // The small search form uses usa-search--small
    const smallForm = page.locator(".usa-search--small").first();
    await expect(smallForm).toBeVisible();
    // `&[role="search"] { display: flex }` — SDS overrides block to flex
    await expect(smallForm).toHaveCSS("display", "flex");
  });
});
