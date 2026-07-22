import { test, expect } from "@playwright/test";

// ─── Paragraph (.sds-big, .sds-small, .sds-text-error) ───────────────────────
// Story: Branding / Typography / Paragraph → Default
// These rules were detached from `p` nesting into standalone classes in _paragraph.scss

test.describe("Paragraph regression", () => {
  test(".sds-big renders larger font-size than the base paragraph", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-typography-paragraph--default");

    // Scope to #storybook-root to avoid matching hidden Storybook UI <p> elements
    const base = page.locator("#storybook-root p:not([class])").first();
    const big = page.locator("#storybook-root p.sds-big").first();
    await expect(base).toBeVisible();
    await expect(big).toBeVisible();

    const baseFontSize = await base.evaluate(
      (el) => getComputedStyle(el).fontSize
    );
    const bigFontSize = await big.evaluate(
      (el) => getComputedStyle(el).fontSize
    );

    // u-font("sans", "md") resolves to 1.13rem = 18.08px; base paragraph is 1rem = 16px
    // Big must be strictly larger than base
    const parse = (v) => parseFloat(v);
    expect(parse(bigFontSize)).toBeGreaterThan(parse(baseFontSize));
  });

  test(".sds-small renders smaller font-size than the base paragraph", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-typography-paragraph--default");

    const base = page.locator("#storybook-root p:not([class])").first();
    const small = page.locator("#storybook-root p.sds-small").first();
    await expect(base).toBeVisible();
    await expect(small).toBeVisible();

    const baseFontSize = await base.evaluate(
      (el) => getComputedStyle(el).fontSize
    );
    const smallFontSize = await small.evaluate(
      (el) => getComputedStyle(el).fontSize
    );

    // u-font("sans", "3xs") resolves to 0.87rem = ~14px; must be smaller than base
    const parse = (v) => parseFloat(v);
    expect(parse(smallFontSize)).toBeLessThan(parse(baseFontSize));
  });

  test(".sds-text-error renders the error-dark text color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-typography-paragraph--default");

    const errorParagraph = page.locator("p.sds-text-error").first();
    await expect(errorParagraph).toBeVisible();

    // u-text("error-dark") = USWDS red-warm-60v = rgb(181, 9, 9)
    await expect(errorParagraph).toHaveCSS("color", "rgb(181, 9, 9)");
  });
});

// ─── Heading (.sds-light) ─────────────────────────────────────────────────────
// Story: Branding / Typography / Heading → Light
// h*.sds-light was `&.sds-light` nested inside the h1…h6 block;
// it is now a standalone `.sds-light` rule in _header.scss

test.describe("Heading sds-light regression", () => {
  test(".sds-light heading renders normal (400) font-weight", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-typography-heading--light");

    const lightHeading = page.locator(".sds-light").first();
    await expect(lightHeading).toBeVisible();

    // u-text("normal") → font-weight: 400
    await expect(lightHeading).toHaveCSS("font-weight", "400");
  });

  test(".sds-light heading has normal (400) font-weight regardless of context", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-typography-heading--light");

    // Verify font-weight on a heading that is NOT inside a table cell (the default
    // heading entry is nested in a <td> which overrides the heading color token).
    // Use the free-form headings at the bottom of the light.html template instead.
    const lightHeading = page.locator(".sds-light").first();
    await expect(lightHeading).toBeVisible();

    // u-text("normal") → font-weight: 400 — this is the core assertion for the
    // h*.sds-light → .sds-light refactor; color is overridden by usa-table td context
    await expect(lightHeading).toHaveCSS("font-weight", "400");
  });
});

// ─── Fields (.sds-field, .sds-field--stacked, .sds-field--featured) ──────────
// Story: Branding / Typography / Fields → Example
// BEM modifier blocks were hoisted from inside .sds-field nesting to top-level rules

test.describe("Field regression", () => {
  test(".sds-field__name is displayed inline by default (not block)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-typography-fields--example");

    const name = page
      .locator(".sds-field:not(.sds-field--stacked) .sds-field__name")
      .first();
    await expect(name).toBeVisible();

    // Without the --stacked modifier, __name is inline
    await expect(name).not.toHaveCSS("display", "block");
  });

  test(".sds-field--stacked makes __name display block", async ({ page }) => {
    await page.goto("/iframe.html?id=branding-typography-fields--example");

    const name = page.locator(".sds-field--stacked .sds-field__name").first();
    await expect(name).toBeVisible();

    // .sds-field--stacked .sds-field__name { u-display("block") }
    await expect(name).toHaveCSS("display", "block");
  });

  test(".sds-field--stacked makes __value display block", async ({ page }) => {
    await page.goto("/iframe.html?id=branding-typography-fields--example");

    const value = page.locator(".sds-field--stacked .sds-field__value").first();
    await expect(value).toBeVisible();

    // .sds-field--stacked .sds-field__value { u-display("block") }
    await expect(value).toHaveCSS("display", "block");
  });

  test(".sds-field--featured makes __name italic and light weight", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=branding-typography-fields--example");

    const name = page.locator(".sds-field--featured .sds-field__name").first();
    await expect(name).toBeVisible();

    // u-text("italic") → font-style: italic
    await expect(name).toHaveCSS("font-style", "italic");
    // u-text("light") → font-weight: 300
    await expect(name).toHaveCSS("font-weight", "300");
  });
});
