import { test, expect } from "@playwright/test";

// Story: Structure / SDS-Navbar => subheader action-button variants
// iframe ID: structure-sds-navbar--sds-subheader-actions
const STORY = "/iframe.html?id=structure-sds-navbar--sds-subheader-actions";

// ─── Labeled-icon variant ─────────────────────────────────────────────────────

test("subheader: labeled-icon button has the correct padding-right", async ({
  page,
}) => {
  await page.goto(STORY);

  const btn = page.locator(".sds-button--labeled-icon").first();
  await expect(btn).toBeVisible();

  // `.sds-navbar ... .actions-button.sds-button--labeled-icon { @include u-padding-right(0.5) }`
  // units(0.5) = 0.25rem = 4px — fails if the lifted rule is removed
  await expect(btn).toHaveCSS("padding-right", "4px");
});

test("subheader: ellipsis-icon has secondary-dark background", async ({
  page,
}) => {
  await page.goto(STORY);

  const icon = page.locator(".sds-button--labeled-icon .ellipsis-icon").first();
  await expect(icon).toBeVisible();

  // `@include u-bg("secondary-dark")` — blue-warm-60v = #1a4480 = rgb(26, 68, 128)
  // Fails if the .ellipsis-icon block is removed from the lifted labeled-icon rule
  await expect(icon).toHaveCSS("background-color", "rgb(26, 68, 128)");
});

test("subheader: ellipsis-icon is rendered as a circle", async ({ page }) => {
  await page.goto(STORY);

  const icon = page.locator(".sds-button--labeled-icon .ellipsis-icon").first();
  await expect(icon).toBeVisible();

  // `border-radius: 50%` — fails if the .ellipsis-icon block is removed
  await expect(icon).toHaveCSS("border-radius", "50%");
});

// ─── Circular variant ─────────────────────────────────────────────────────────

test("subheader: circular button has a box-shadow on :hover", async ({
  page,
}) => {
  await page.goto(STORY);

  const btn = page.locator(".sds-button--circular").first();
  await expect(btn).toBeVisible();

  // Confirm no shadow before hover
  const shadowBefore = await btn.evaluate((el) => getComputedStyle(el).boxShadow);
  expect(shadowBefore).toBe("none");

  await btn.hover();

  // `.sds-button--circular:hover { box-shadow: 0 0 20px -1px #162e51 }`
  // Fails if the :hover block is removed from the lifted circular rule.
  // We assert non-none and that it contains the expected color component rgb(22, 46, 81).
  const shadowAfter = await btn.evaluate((el) => getComputedStyle(el).boxShadow);
  expect(shadowAfter).not.toBe("none");
  expect(shadowAfter).toContain("22, 46, 81");
});

test("subheader: circular button has a focus-ring box-shadow on :active", async ({
  page,
}) => {
  await page.goto(STORY);
  await page.waitForLoadState("networkidle");

  // CSS :active cannot be reliably triggered via synthetic MouseEvents in Chromium —
  // the browser's active state is tied to real pointer events, not JS-dispatched ones.
  // Instead, verify the rule exists in the compiled stylesheet by scanning cssRules.
  // The Storybook build serves all CSS from the same origin (localhost), so cssRules
  // are accessible without CORS restrictions.
  // `.sds-button--circular:active { box-shadow: 0 0 0 1px #162e51 }`
  const activeBoxShadow = await page.evaluate(() => {
    for (const sheet of Array.from(document.styleSheets)) {
      try {
        for (const rule of Array.from(sheet.cssRules || [])) {
          if (
            rule.selectorText &&
            rule.selectorText.includes("sds-button--circular") &&
            rule.selectorText.includes(":active")
          ) {
            return rule.style.boxShadow;
          }
        }
      } catch {
        // Skip cross-origin sheets (none expected in Storybook build)
      }
    }
    return null;
  });

  // Fails if the :active block is removed from the lifted circular rule.
  // The rule exists if the refactor preserved the lifted selector.
  expect(activeBoxShadow).not.toBeNull();
  expect(activeBoxShadow).not.toBe("");
  expect(activeBoxShadow).toContain("162e51");
});
