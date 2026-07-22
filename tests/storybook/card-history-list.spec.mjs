import { test, expect } from "@playwright/test";

// ─── Card BEM modifier regressions ───────────────────────────────────────────
// .sds-card--list, .sds-card--collapsed, .sds-card--vertical, .sds-card--collapsible
// and the .sds-card__header--* sub-rules were all hoisted from nested &-- syntax
// to flat top-level rules in card.scss.

test.describe("Card regression", () => {
  test(".sds-card--list removes the card outer border", async ({ page }) => {
    await page.goto("/iframe.html?id=components-card--list");

    const card = page.locator(".sds-card--list").first();
    await expect(card).toBeVisible();

    // .sds-card--list { u-border(0) } — border-width becomes 0
    await expect(card).toHaveCSS("border-width", "0px");
  });

  test(".sds-card--list body has zero padding", async ({ page }) => {
    await page.goto("/iframe.html?id=components-card--list");

    const body = page.locator(".sds-card--list .sds-card__body").first();
    await expect(body).toBeVisible();

    // .sds-card--list .sds-card__body { u-padding(0) }
    await expect(body).toHaveCSS("padding", "0px");
  });

  test(".sds-card--collapsed hides the body", async ({ page }) => {
    await page.goto("/iframe.html?id=components-card--collapsible");

    const body = page
      .locator(".sds-card--collapsed .sds-card__body")
      .first();
    await expect(body).toBeAttached();

    // .sds-card--collapsed .sds-card__body { display: none }
    await expect(body).toHaveCSS("display", "none");
  });

  test(".sds-card--vertical renders as a flex container", async ({ page }) => {
    await page.goto("/iframe.html?id=components-card--vertical-header");

    const card = page.locator(".sds-card--vertical").first();
    await expect(card).toBeVisible();

    // .sds-card--vertical { u-display("flex") } at mobile+
    await expect(card).toHaveCSS("display", "flex");
  });

  test(".sds-card__header--stacked is a flex container centered on both axes", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-card--header-icon-stacked");

    const header = page.locator(".sds-card__header--stacked").first();
    await expect(header).toBeVisible();

    // .sds-card__header--stacked { u-display("flex"); justify-content: center; align-items: center }
    await expect(header).toHaveCSS("display", "flex");
    await expect(header).toHaveCSS("justify-content", "center");
    await expect(header).toHaveCSS("align-items", "center");
  });
});

// ─── History regression ───────────────────────────────────────────────────────
// ul.sds-history → .sds-history — element type stripped in history.scss

test.describe("History regression", () => {
  test(".sds-history renders with no list bullets (list-style: none)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-history--history");

    const list = page.locator(".sds-history").first();
    await expect(list).toBeVisible();

    // .sds-history { list-style: none }
    await expect(list).toHaveCSS("list-style-type", "none");
  });

  test(".sds-history has the expected left padding for bullet alignment", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-history--history");

    const list = page.locator(".sds-history").first();
    await expect(list).toBeVisible();

    // .sds-history { padding: 2em 0 0 2em } — padding-left = 2em
    const paddingLeft = await list.evaluate(
      (el) => getComputedStyle(el).paddingLeft
    );
    // 2em at 16px base = 32px
    expect(parseFloat(paddingLeft)).toBeGreaterThanOrEqual(32);
  });
});

// ─── List subdomain active link ───────────────────────────────────────────────
// `.usa-link--active` was nested as `.usa-link { &--active }` inside &--subdomain;
// refactored to a flat `.sds-list--subdomain .usa-link--active` rule in list.scss.

test.describe("List subdomain regression", () => {
  test(".sds-list--subdomain .usa-link--active renders ink text color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-typography-lists--lists");

    const subdomainList = page.locator(".sds-list--subdomain").first();
    await expect(subdomainList).toBeVisible();

    // Add .usa-link--active to a link and verify the color rule fires
    const color = await subdomainList.evaluate((list) => {
      const link = list.querySelector("a.usa-link");
      if (!link) return null;
      link.classList.add("usa-link--active");
      return getComputedStyle(link).color;
    });

    // u-text("ink") = gray-warm-80 = rgb(69, 69, 64)
    expect(color).toBe("rgb(69, 69, 64)");
  });
});
