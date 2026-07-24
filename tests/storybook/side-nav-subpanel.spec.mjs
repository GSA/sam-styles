import { test, expect } from "@playwright/test";

// ─── SideNav subpanel ──────────────────────────────────────────────────────
// Story: Components / SideNav → Subpanel → iframe ID: components-sidenav--subpanel
// The `.usa-sidenav.sds-subpanel` rules target `a:not(.usa-button)` so that any
// non-button anchor is styled, not only anchors carrying `.usa-link`. These
// assertions fail if the selector regresses to `.usa-link`, because the plain
// anchors in the fixture would fall back to their default (underlined) styles.

const STORY = "/iframe.html?id=components-sidenav--subpanel";

test("subpanel: plain anchor (no .usa-link) loses its underline via a:not(.usa-button)", async ({
  page,
}) => {
  await page.goto(STORY);

  const link = page.getByRole("link", { name: "Plain anchor link" }).first();
  await expect(link).toBeVisible();

  // .usa-sidenav.sds-subpanel .usa-sidenav__item a:not(.usa-button) { text-decoration: none }
  await expect(link).toHaveCSS("text-decoration-line", "none");
});

test("subpanel: plain anchor (no .usa-link) is semibold via a:not(.usa-button)", async ({
  page,
}) => {
  await page.goto(STORY);

  const link = page.getByRole("link", { name: "Plain anchor link" }).first();
  await expect(link).toBeVisible();

  // font-weight: font-weight("semibold") → 600
  await expect(link).toHaveCSS("font-weight", "600");
});

test("subpanel: active anchor (a.usa-link--active) uses base-dark text color", async ({
  page,
}) => {
  await page.goto(STORY);

  const link = page.getByRole("link", { name: "Active link" }).first();
  await expect(link).toBeVisible();

  // a.usa-link--active { color: color("base-dark") } — in this theme base-dark = gray-warm-70 = rgb(69, 69, 64)
  await expect(link).toHaveCSS("color", "rgb(69, 69, 64)");
});
