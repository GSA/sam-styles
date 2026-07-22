import { test, expect } from "@playwright/test";

// Covers miscellaneous single-rule !important removals across several files.
//
// Files covered:
//   stepindicator.scss  — background-color: transparent + new .sds-step-indicator selector
//   pagination.scss     — .width-6 { width: 3rem }
//   slideout.scss       — .dialog-slide-out { position: fixed }
//   header.scss         — .counter-icon { color: red }  (debug color; !important removed)
//   footer.scss         — .usa-footer__primary-link::before { content: none }
//   _sizing.scss        — .width-card-lg { width: 15rem }  (space bug also fixed)

// ── Step Indicator ────────────────────────────────────────────────────────────

test("step indicator: .usa-step-indicator has transparent background", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-stepindicator--default");

  const indicator = page.locator(".usa-step-indicator").first();
  await expect(indicator).toBeVisible();

  // `.usa-step-indicator { background-color: transparent }` — fails if USWDS re-asserts white
  await expect(indicator).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
});

// ── Pagination ────────────────────────────────────────────────────────────────

test("pagination: .width-6 input renders at 3rem (48px) width", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-pagination--pagination");

  const input = page.locator(".width-6").first();
  await expect(input).toBeVisible();

  // `.width-6 { width: 3rem }` — also validates the space-bug fix on _sizing.scss
  await expect(input).toHaveCSS("width", "48px");
});

// ── Slideout ──────────────────────────────────────────────────────────────────

test("slideout: .dialog-slide-out is position:fixed", async ({ page }) => {
  await page.goto("/iframe.html?id=components-stepindicator--default");

  // .dialog-slide-out has no Storybook story; inject into a loaded page
  const position = await page.evaluate(() => {
    const el = document.createElement("div");
    el.className = "dialog-slide-out";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    return window.getComputedStyle(el).position;
  });

  // `.dialog-slide-out { position: fixed }` — fails if USWDS or browser resets to static
  expect(position).toBe("fixed");
});

// ── Header counter-icon ───────────────────────────────────────────────────────

test("header: .counter-icon inside .usa-menu-btn renders red text", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=structure-header--default");

  // Inject a .counter-icon inside a .usa-menu-btn to verify the color rule
  const color = await page.evaluate(() => {
    const menuBtn = document.querySelector(".usa-menu-btn");
    if (!menuBtn) {
      // Create wrapper if story doesn't have one
      const wrapper = document.createElement("button");
      wrapper.className = "usa-menu-btn";
      wrapper.style.visibility = "hidden";
      document.body.appendChild(wrapper);
      const icon = document.createElement("span");
      icon.className = "counter-icon";
      wrapper.appendChild(icon);
      return window.getComputedStyle(icon).color;
    }
    const icon = document.createElement("span");
    icon.className = "counter-icon";
    menuBtn.appendChild(icon);
    return window.getComputedStyle(icon).color;
  });

  // `.usa-menu-btn .counter-icon { color: red }` = rgb(255, 0, 0)
  expect(color).toBe("rgb(255, 0, 0)");
});

// ── Footer primary-link ::before ──────────────────────────────────────────────

test("footer: .usa-footer__primary-link::before has no content (USWDS arrow suppressed)", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=structure-footer--default-big");

  const link = page.locator(".usa-footer__primary-link").first();
  await expect(link).toBeVisible();

  // `.usa-footer__primary-content--collapsible .usa-footer__primary-link::before { content: none }`
  // Fails if USWDS arrow-icon ::before content is not suppressed
  const content = await link.evaluate((el) =>
    window.getComputedStyle(el, "::before").getPropertyValue("content")
  );
  expect(content === "none" || content === "").toBeTruthy();
});

// ── _sizing.scss ─────────────────────────────────────────────────────────────

test("sizing: .width-card-lg renders at 15rem (240px)", async ({ page }) => {
  await page.goto("/iframe.html?id=structure-sds-navbar--sds-navbar");

  // The width-card-lg input has display-none; measure the rule directly via JS
  const width = await page.evaluate(() => {
    const existing = document.querySelector(".width-card-lg");
    if (existing) {
      // Temporarily show it so we can measure, then restore
      const prev = existing.style.display;
      existing.style.display = "block";
      const w = window.getComputedStyle(existing).width;
      existing.style.display = prev;
      return w;
    }
    // Fallback: inject element
    const el = document.createElement("div");
    el.className = "width-card-lg";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    return window.getComputedStyle(el).width;
  });

  // `.width-card-lg { width: 15rem }` — also confirms the space-bug fix (was "15 rem")
  // 15rem at default 16px = 240px
  expect(width).toBe("240px");
});
