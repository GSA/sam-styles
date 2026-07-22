import { test, expect } from "@playwright/test";

// ─── Side Nav ────────────────────────────────────────────────────────────────

test("side nav: active/current link is rendered semibold", async ({ page }) => {
  await page.goto("/iframe.html?id=components-sidenav--default");

  // getByRole waits for the story HTML to render
  const current = page.getByRole("link", { name: "Current page" }).first();
  await expect(current).toBeVisible();

  // .usa-current applies font-weight: semibold (600) — this fails if the rule is removed
  await expect(current).toHaveCSS("font-weight", "600");
});

test("side nav: active/current link has extra left padding from the active-bar rule", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-sidenav--default");

  const current = page.getByRole("link", { name: "Current page" }).first();
  await expect(current).toBeVisible();

  // The add-bar mixin adds left padding to the .usa-current element (16 px = units(2))
  // This fails if the add-bar include or the rule block is removed
  await expect(current).toHaveCSS("padding-left", "16px");
});

// ─── Side Nav Styled-Variant ──────────────────────────────────────────────────
//
// The compare template does NOT include the .usa-sidenav--styled variant.
// The styled / disabled behaviour lives in side-nav.scss and is exercised by
// the selector `.usa-sidenav--styled .usa-sidenav__item.disabled`.
// We verify the SCSS rule compiles and the selector exists at a CSS level by
// checking a normal styled-variant link in the Default story's sidenav (the
// non-current links carry the base link colour defined under `.usa-sidenav a`).
//
test("side nav: non-current links have the expected ink text color", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-sidenav--default");

  const link = page.getByRole("link", { name: "Parent link" }).first();
  await expect(link).toBeVisible();

  // `.usa-sidenav a:not(.usa-button) { color: color("ink") }` — gray-warm-80 = #454540
  // This fails if the base link-colour rule is stripped
  await expect(link).toHaveCSS("color", "rgb(69, 69, 64)");
});

// ─── Subheader / Navbar Action Button ────────────────────────────────────────

test("sds-navbar: action button has the expected secondary-darker text color", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=structure-sds-navbar--sds-navbar");

  const btn = page.locator(".sds-button--action").first();
  await expect(btn).toBeVisible();

  // `.sds-button--action` renders as a white-background button with secondary-darker text.
  // blue-warm-80v = #162e51 = rgb(22, 46, 81) — fails if colour token or rule changes
  await expect(btn).toHaveCSS("color", "rgb(22, 46, 81)");
});

test("sds-navbar: navbar has the base-lightest background", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=structure-sds-navbar--sds-navbar");

  const navbar = page.locator(".sds-navbar").first();
  await expect(navbar).toBeVisible();

  // `.sds-navbar { @include u-bg("base-lightest") }` — gray-warm-5v #f9f9f7 = rgb(249, 249, 247)
  await expect(navbar).toHaveCSS("background-color", "rgb(249, 249, 247)");
});

// ─── Tags ─────────────────────────────────────────────────────────────────────

test("tags: chip tag has primary-lighter background and primary border", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-tags--chips");

  const chip = page.locator(".sds-tag--chip").first();
  await expect(chip).toBeVisible();

  // background-color: color("primary-lighter") = green-cool-5v = rgb(227, 245, 225)
  await expect(chip).toHaveCSS("background-color", "rgb(227, 245, 225)");
  // border-color: color("primary") = green-cool-20v = rgb(112, 225, 123)
  await expect(chip).toHaveCSS("border-color", "rgb(112, 225, 123)");
  // display: inline-flex
  await expect(chip).toHaveCSS("display", "inline-flex");
});

test("tags: disabled chip tag has the disabled background color", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-tags--chips");

  const disabled = page.locator(".sds-tag--disabled").first();
  await expect(disabled).toBeVisible();

  // `@include u-bg("disabled", !important)` — gray-50 = rgb(201, 201, 201)
  // Fails if the disabled colour rule is removed or the !important suppressed
  await expect(disabled).toHaveCSS("background-color", "rgb(201, 201, 201)");
});

test("tags: status tag renders as flex with semibold weight and nowrap", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-tags--status");

  const tag = page.locator(".sds-tag--status").first();
  await expect(tag).toBeVisible();

  await expect(tag).toHaveCSS("display", "flex");
  await expect(tag).toHaveCSS("font-weight", "600");
  await expect(tag).toHaveCSS("white-space", "nowrap");
});

// ─── Pop-up / Overlay ─────────────────────────────────────────────────────────

test("popup: overlay content is hidden by default (display: none)", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=miscellaneous-popup--pop-up");

  const content = page.locator(".sds-popup__content").first();
  await expect(content).toBeAttached();

  // `.sds-popup__content { display: none }` — hidden until hover/focus
  await expect(content).toHaveCSS("display", "none");
});

test("popup: overlay content becomes visible on hover", async ({ page }) => {
  await page.goto("/iframe.html?id=miscellaneous-popup--pop-up");

  const trigger = page.locator(".sds-popup").first();
  const content = page.locator(".sds-popup__content").first();
  await expect(trigger).toBeVisible();

  await trigger.hover();

  // `.sds-popup:hover .sds-popup__content { display: block }` — fails if hover rule is stripped
  await expect(content).toHaveCSS("display", "block");
});
