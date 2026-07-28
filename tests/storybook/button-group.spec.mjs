import { test, expect } from "@playwright/test";

// Covers button-group.scss — .sds-button-group--segmented flex layout,
// radius trimming on first/last child, secondary variant bg color
// Story: Components/ButtonGroup — ButtonGroup

test.describe("Button group regression", () => {
  test("segmented button group renders as flex row", async ({ page }) => {
    await page.goto("/iframe.html?id=components-buttongroup--button-group");
    const group = page
      .locator(".sds-button-group.sds-button-group--segmented")
      .first();
    await expect(group).toBeVisible();
    // @include u-display("flex") + @include u-flex("row")
    await expect(group).toHaveCSS("display", "flex");
    await expect(group).toHaveCSS("flex-direction", "row");
  });

  test("first item in group removes right border-radius", async ({ page }) => {
    await page.goto("/iframe.html?id=components-buttongroup--button-group");
    const firstButton = page
      .locator(
        ".sds-button-group.sds-button-group--segmented .sds-button-group__item:first-child .usa-button"
      )
      .first();
    await expect(firstButton).toBeVisible();
    // .sds-button-group__item:first-child > .usa-button { border-top-right-radius: 0; border-bottom-right-radius: 0 }
    await expect(firstButton).toHaveCSS("border-top-right-radius", "0px");
    await expect(firstButton).toHaveCSS("border-bottom-right-radius", "0px");
  });

  test("last item in group removes left border-radius", async ({ page }) => {
    await page.goto("/iframe.html?id=components-buttongroup--button-group");
    const lastButton = page
      .locator(
        ".sds-button-group.sds-button-group--segmented .sds-button-group__item:last-child .usa-button"
      )
      .first();
    await expect(lastButton).toBeVisible();
    // .sds-button-group__item:last-child > .usa-button { border-top-left-radius: 0; border-bottom-left-radius: 0 }
    await expect(lastButton).toHaveCSS("border-top-left-radius", "0px");
    await expect(lastButton).toHaveCSS("border-bottom-left-radius", "0px");
  });

  test("secondary group outlined button renders white background", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-buttongroup--button-group");
    const outlineButton = page
      .locator(".sds-button-group--secondary .usa-button--outline")
      .first();
    await expect(outlineButton).toBeVisible();
    // .sds-button-group--secondary .usa-button--outline { @include u-bg("white") }
    await expect(outlineButton).toHaveCSS(
      "background-color",
      "rgb(255, 255, 255)"
    );
  });
});
