import { test, expect } from "@playwright/test";

// Covers menu.scss changes — `color !important`, `background-color !important`,
// `border-* !important`, and `outline-offset !important` all removed.
//
// .sds-button--menu has no standalone Storybook story; elements are injected
// via page.evaluate into a known story page so the compiled stylesheet is loaded.
// .sds-button--action is present in the SDS-Navbar story.

// ── sds-button--menu ──────────────────────────────────────────────────────────

test("menu button: has secondary-dark text color", async ({ page }) => {
  await page.goto("/iframe.html?id=components-actions--actions");

  // Inject a .sds-button--menu element — stylesheet is already loaded on the page
  const color = await page.evaluate(() => {
    const el = document.createElement("div");
    el.className = "sds-button--menu";
    el.style.position = "absolute";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    const cs = window.getComputedStyle(el);
    return cs.color;
  });

  // `.sds-button--menu { color: color("secondary-dark") }` = blue-warm-70v = rgb(26, 68, 128)
  // Fails if the color rule was removed or the !important suppressor broke specificity
  expect(color).toBe("rgb(26, 68, 128)");
});

test("menu button .usa-button: has white background and secondary-dark border", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-actions--actions");

  const styles = await page.evaluate(() => {
    const el = document.createElement("button");
    el.className = "usa-button sds-button--menu";
    el.style.position = "absolute";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    const cs = window.getComputedStyle(el);
    return {
      background: cs.backgroundColor,
      border: cs.borderColor,
    };
  });

  // `.sds-button--menu.usa-button { background-color: white; border-color: secondary-dark }`
  expect(styles.background).toBe("rgb(255, 255, 255)");
  expect(styles.border).toBe("rgb(26, 68, 128)");
});

test("menu button .usa-button--disabled: has base border, white bg, and base text", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-actions--actions");

  const styles = await page.evaluate(() => {
    const el = document.createElement("button");
    el.className = "usa-button sds-button--menu usa-button--disabled";
    el.disabled = true;
    el.style.position = "absolute";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    const cs = window.getComputedStyle(el);
    return {
      borderColor: cs.borderColor,
      background: cs.backgroundColor,
      color: cs.color,
      cursor: cs.cursor,
    };
  });

  // `.sds-button--menu.usa-button--disabled { border-color: base; background: white; color: base }`
  // base = gray-50 = rgb(117, 117, 117)
  expect(styles.borderColor).toBe("rgb(117, 117, 117)");
  expect(styles.background).toBe("rgb(255, 255, 255)");
  expect(styles.color).toBe("rgb(117, 117, 117)");
  expect(styles.cursor).toBe("auto");
});

// ── sds-button--action (SDS-Navbar story) ─────────────────────────────────────

test("action button: has white background (circle action button base state)", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=structure-sds-navbar--sds-navbar");

  const btn = page.locator(".sds-button--action").first();
  await expect(btn).toBeVisible();

  // `.sds-button--action { background-color: color("white") }`
  await expect(btn).toHaveCSS("background-color", "rgb(255, 255, 255)");
});

// ── sds-button--menu (SDS Styles/Overrides story) ─────────────────────────────
// The new MenuButton story renders base/hover/active/disabled variants so the
// menu-trigger states are reviewable without DevTools injection.

test("menu button story: disabled variant renders base-gray border/text on white", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=sds-styles-overrides--menu-button");

  const disabled = page
    .locator(".sds-button--menu.usa-button--disabled")
    .first();
  await expect(disabled).toBeVisible();

  // `.sds-button--menu.usa-button--disabled { border-color: base; background: white; color: base }`
  // base = gray-50 = rgb(117, 117, 117)
  await expect(disabled).toHaveCSS("border-top-color", "rgb(117, 117, 117)");
  await expect(disabled).toHaveCSS("background-color", "rgb(255, 255, 255)");
  await expect(disabled).toHaveCSS("color", "rgb(117, 117, 117)");
});
