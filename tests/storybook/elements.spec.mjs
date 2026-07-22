import { test, expect } from "@playwright/test";

// ─── Border utilities (.thin, .fine) ─────────────────────────────────────────
// hr.thin / hr.fine → .thin / .fine in _borders.scss
// Story: Branding / Elements → Border Utilities

test.describe("Border utilities regression", () => {
  test(".thin hr has zero border-width and a 1px top border in base-lighter color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-elements--border-utilities");

    const hr = page.locator("hr.thin").first();
    await expect(hr).toBeVisible();

    // border: 0 — left/right/bottom widths are 0
    await expect(hr).toHaveCSS("border-bottom-width", "0px");
    await expect(hr).toHaveCSS("border-left-width", "0px");

    // u-border-top(1px) → border-top-width: 1px
    await expect(hr).toHaveCSS("border-top-width", "1px");

    // u-border-top("base-lighter") → $theme-color-base-lighter = gray-warm-4 = rgb(245, 245, 240)
    await expect(hr).toHaveCSS("border-top-color", "rgb(245, 245, 240)");
  });

  test(".fine hr has zero border-width and a 1px top border in base-light color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-elements--border-utilities");

    const hr = page.locator("hr.fine").first();
    await expect(hr).toBeVisible();

    await expect(hr).toHaveCSS("border-bottom-width", "0px");
    await expect(hr).toHaveCSS("border-top-width", "1px");

    // u-border-top("base-light") → $theme-color-base-light = gray-20 = rgb(201, 201, 201)
    await expect(hr).toHaveCSS("border-top-color", "rgb(201, 201, 201)");
  });

  test(".thin and .fine have zero height", async ({ page }) => {
    await page.goto("/iframe.html?id=branding-elements--border-utilities");

    const thin = page.locator("hr.thin").first();
    const fine = page.locator("hr.fine").first();
    await expect(thin).toBeVisible();
    await expect(fine).toBeVisible();

    // height: 0 — confirms the rule is applied (not overridden)
    await expect(thin).toHaveCSS("height", "0px");
    await expect(fine).toHaveCSS("height", "0px");
  });
});

// ─── Icon size utilities (.size-*, .sds-icon-margin) ─────────────────────────
// i.size-* → .size-* and i.sds-icon-margin → .sds-icon-margin in _utils.scss
// Story: Branding / Elements → Icon Size Utilities

test.describe("Icon size utilities regression", () => {
  test(".size-2x renders font-size of 2em relative to parent", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-elements--icon-size-utilities");

    const icon = page.locator(".size-2x").first();
    await expect(icon).toBeVisible();

    // .size-2x { font-size: 2em }
    // The parent div has no explicit font-size so inherits 16px base;
    // 2em = 32px. Allow ±1px for subpixel rendering.
    const fontSize = await icon.evaluate((el) =>
      parseFloat(getComputedStyle(el).fontSize)
    );
    expect(fontSize).toBeGreaterThanOrEqual(31);
    expect(fontSize).toBeLessThanOrEqual(33);
  });

  test(".size-lg renders font-size of 1.33em (between base and 2x)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-elements--icon-size-utilities");

    const lg = page.locator(".size-lg").first();
    const twoX = page.locator(".size-2x").first();
    await expect(lg).toBeVisible();
    await expect(twoX).toBeVisible();

    const lgSize = await lg.evaluate((el) =>
      parseFloat(getComputedStyle(el).fontSize)
    );
    const twoXSize = await twoX.evaluate((el) =>
      parseFloat(getComputedStyle(el).fontSize)
    );

    // .size-lg { font-size: 1.33em } < .size-2x { font-size: 2em }
    expect(lgSize).toBeLessThan(twoXSize);
    // and larger than base 16px
    expect(lgSize).toBeGreaterThan(16);
  });

  test(".size-sm renders font-size smaller than base", async ({ page }) => {
    await page.goto("/iframe.html?id=branding-elements--icon-size-utilities");

    const sm = page.locator(".size-sm").first();
    await expect(sm).toBeVisible();

    // .size-sm { font-size: 0.875em } — 14px at 16px base
    const fontSize = await sm.evaluate((el) =>
      parseFloat(getComputedStyle(el).fontSize)
    );
    expect(fontSize).toBeLessThan(16);
  });

  test(".sds-icon-margin applies right margin of 0.5rem", async ({ page }) => {
    await page.goto("/iframe.html?id=branding-elements--icon-size-utilities");

    const icon = page.locator(".sds-icon-margin").first();
    await expect(icon).toBeVisible();

    // .sds-icon-margin { margin-right: 0.5rem } = 8px at base 16px
    await expect(icon).toHaveCSS("margin-right", "8px");
  });
});
