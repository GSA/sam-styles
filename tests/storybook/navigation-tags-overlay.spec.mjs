import { test, expect } from "@playwright/test";

// ─── Side Nav ────────────────────────────────────────────────────────────────

test("side nav: active/current link has the expected secondary-darker text color", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-sidenav--default");

  // getByRole waits for the story HTML to render
  const current = page.getByRole("link", { name: "Current page" }).first();
  await expect(current).toBeVisible();

  // `.usa-sidenav .usa-current { color: color("secondary-darker") }` — ink/gray-warm-90
  // rgb(46, 46, 42) is distinct from the normal link ink colour rgb(69, 69, 64);
  // this assertion fails if the .usa-current colour rule is removed.
  await expect(current).toHaveCSS("color", "rgb(46, 46, 42)");
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

test("side nav styled-variant: disabled item has muted color and auto cursor", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-sidenav--default");

  const link = page.getByRole("link", { name: "Parent link" }).first();
  await expect(link).toBeVisible();

  // Add the styled-variant modifier and mark the first item disabled in-page so we
  // can assert the compiled `.usa-sidenav--styled .usa-sidenav__item.disabled` rule.
  const styles = await page.evaluate(() => {
    const nav = document.querySelector(".usa-sidenav");
    nav.classList.add("usa-sidenav--styled");
    const firstItem = nav.querySelector("li.usa-sidenav__item");
    firstItem.classList.add("disabled");
    const cs = getComputedStyle(firstItem);
    return { color: cs.color, cursor: cs.cursor };
  });

  // `.usa-sidenav--styled .usa-sidenav__item.disabled { color: #c9c9c9 !important; cursor: auto }`
  // rgb(201, 201, 201) = #c9c9c9 — fails if the disabled block is removed
  expect(styles.color).toBe("rgb(201, 201, 201)");
  expect(styles.cursor).toBe("auto");
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
