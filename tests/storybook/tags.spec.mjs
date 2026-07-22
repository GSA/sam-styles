import { test, expect } from "@playwright/test";

// Covers _tags.scss !important removals — .sds-tag--disabled border,
// .sds-tag--light, .sds-tag--block, and .sds-status-tag padding.
//
// The existing navigation-tags-overlay.spec.mjs already covers:
//   - sds-tag--disabled background-color = rgb(201, 201, 201)
//   - sds-tag--chip background and border
//   - sds-status-tag display/weight/nowrap
//
// These tests add coverage for the remaining changed rules.

// ── sds-tag--disabled border ──────────────────────────────────────────────────

test("tags: disabled tag has disabled-dark border color", async ({ page }) => {
  await page.goto("/iframe.html?id=components-tags--chips");

  const tag = page.locator(".sds-tag--disabled").first();
  await expect(tag).toBeVisible();

  // `@include u-border("disabled-dark")` = gray-30 = #adadad = rgb(173, 173, 173)
  // Fails if the border rule was dropped during !important removal
  await expect(tag).toHaveCSS("border-color", "rgb(173, 173, 173)");
});

// ── sds-tag--light ────────────────────────────────────────────────────────────
// Injected in isolation because story uses sds-tag--chip + sds-tag--light combined
// and sds-tag--chip has higher specificity (0,2,0 vs 0,1,0).

test("tags: standalone sds-tag--light has white background", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-tags--chips");

  const bg = await page.evaluate(() => {
    const el = document.createElement("span");
    el.className = "sds-tag--light";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    return window.getComputedStyle(el).backgroundColor;
  });

  // `@include u-bg("white")` = rgb(255, 255, 255)
  expect(bg).toBe("rgb(255, 255, 255)");
});

test("tags: standalone sds-tag--light has warning border color", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-tags--chips");

  const border = await page.evaluate(() => {
    const el = document.createElement("span");
    el.className = "sds-tag--light";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    return window.getComputedStyle(el).borderColor;
  });

  // `@include u-border("warning")` = gold-20v = #ffbe2e = rgb(255, 190, 46)
  expect(border).toBe("rgb(255, 190, 46)");
});

test("tags: standalone sds-tag--light has base-darker text color", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-tags--chips");

  const color = await page.evaluate(() => {
    const el = document.createElement("span");
    el.className = "sds-tag--light";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    return window.getComputedStyle(el).color;
  });

  // `@include u-text("base-darker")` = gray-warm-70 = #454540 = rgb(69, 69, 64)
  expect(color).toBe("rgb(69, 69, 64)");
});

// ── sds-tag--block (inside grid-col) ─────────────────────────────────────────

test("tags: sds-tag--block inside a grid-col renders as block at full width", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-tags--chips");

  const styles = await page.evaluate(() => {
    // Wrap the tag in a grid column, mimicking the selector:
    //   div[class^="grid-col-"] .sds-tag--block { display: block; width: 100% }
    const wrapper = document.createElement("div");
    wrapper.className = "grid-col-4";
    wrapper.style.width = "200px"; // give the column a known width
    const tag = document.createElement("span");
    tag.className = "sds-tag sds-tag--block";
    wrapper.appendChild(tag);
    document.body.appendChild(wrapper);
    const cs = window.getComputedStyle(tag);
    return { display: cs.display, width: cs.width };
  });

  // `div[class^="grid-col-"] .sds-tag--block { display: block; width: 100% }`
  expect(styles.display).toBe("block");
  // width: 100% of 200px wrapper = 200px
  expect(styles.width).toBe("200px");
});

// ── sds-status-tag padding ────────────────────────────────────────────────────

test("tags: sds-status-tag has 6px 10px padding", async ({ page }) => {
  await page.goto("/iframe.html?id=components-tags--status-tag");

  const tag = page.locator(".sds-status-tag").first();
  await expect(tag).toBeVisible();

  // `padding: 6px 10px` — was `padding: 6px 10px !important`
  await expect(tag).toHaveCSS("padding-top", "6px");
  await expect(tag).toHaveCSS("padding-bottom", "6px");
  await expect(tag).toHaveCSS("padding-left", "10px");
  await expect(tag).toHaveCSS("padding-right", "10px");
});
