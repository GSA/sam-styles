import { test, expect } from "@playwright/test";

// Covers !important removals on SDS layout/override selectors that have no
// standalone Storybook story: form-group / filter margins, filter checkbox &
// radio backgrounds, and the collapsed nav secondary-item ::before content.
//
// Following the menu.spec.mjs / utils-borders.spec.mjs convention: elements are
// injected via page.evaluate into a known story page so the compiled stylesheet
// is already loaded, then computed styles are asserted. Each assertion confirms
// the SDS rule still wins the cascade WITHOUT the removed `!important` guard.

// ── _inputs.scss: margin-top overrides ────────────────────────────────────────

test("forms: formly-form .usa-form-group has margin-top:0 (override wins without !important)", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=form-elements-input--input");

  const marginTop = await page.evaluate(() => {
    // Seed a competing lower-specificity stylesheet rule so a passing assertion
    // proves the SDS `formly-form .usa-form-group` reset actually wins the
    // cascade (a bare div already has margin-top:0, which would pass even if
    // the SDS rule were deleted).
    const style = document.createElement("style");
    style.textContent = ".usa-form-group { margin-top: 40px; }";
    document.head.appendChild(style);

    const form = document.createElement("formly-form");
    const group = document.createElement("div");
    group.className = "usa-form-group";
    group.style.visibility = "hidden";
    form.appendChild(group);
    document.body.appendChild(form);
    return window.getComputedStyle(group).marginTop;
  });

  // `formly-form .usa-form-group { margin-top: 0 }` — was `0 !important`.
  // Must beat the seeded 40px single-class rule via its higher specificity,
  // confirming the reset still holds without the guard.
  expect(marginTop).toBe("0px");
});

test("forms: .single-form-control .usa-input has margin-top:0 (override wins without !important)", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=form-elements-input--input");

  const marginTop = await page.evaluate(() => {
    // USWDS already gives `.usa-input` a non-zero margin-top (8px), so this
    // assertion is discriminating: only the SDS `.single-form-control .usa-input`
    // reset can zero it.
    const wrapper = document.createElement("div");
    wrapper.className = "single-form-control";
    const input = document.createElement("input");
    input.className = "usa-input";
    input.style.visibility = "hidden";
    wrapper.appendChild(input);
    document.body.appendChild(wrapper);
    return window.getComputedStyle(input).marginTop;
  });

  // `.single-form-control .usa-input { margin-top: 0 }` — was `0 !important`.
  // Confirms it overrides the USWDS `.usa-input { margin-top: 8px }` default.
  expect(marginTop).toBe("0px");
});

// ── filter.scss: horizontal-filter margins ────────────────────────────────────

test("filter: .sds-filters--horizontal formly-field has margin-top:0 (override wins without !important)", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=form-elements-input--input");

  const marginTop = await page.evaluate(() => {
    // Seed a competing lower-specificity rule so the reset is discriminating.
    const style = document.createElement("style");
    style.textContent = "formly-field { margin-top: 40px; }";
    document.head.appendChild(style);

    const wrapper = document.createElement("div");
    wrapper.className = "sds-filters--horizontal";
    const field = document.createElement("formly-field");
    field.style.visibility = "hidden";
    wrapper.appendChild(field);
    document.body.appendChild(wrapper);
    return window.getComputedStyle(field).marginTop;
  });

  // `.sds-filters--horizontal formly-field { margin-top: 0 }` — was `0 !important`.
  // Must beat the seeded 40px element rule via higher specificity.
  expect(marginTop).toBe("0px");
});

test("filter story: .sds-filters--horizontal formly-field renders flush (margin-top:0)", async ({
  page,
}) => {
  // Rendered by the SDS Styles / Overrides → Horizontal filter story, which seeds
  // its own competing `formly-field { margin-top: 40px }` rule inline.
  await page.goto("/iframe.html?id=sds-styles-overrides--horizontal-filter");

  const field = page.locator(".sds-filters--horizontal > formly-field").first();
  await expect(field).toBeVisible();

  // The SDS reset must beat the story's seeded 40px competitor.
  await expect(field).toHaveCSS("margin-top", "0px");
});

test("filter: .sds-filters--horizontal .search-input formly-field zeroes both margins (override wins without !important)", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=form-elements-input--input");

  const margins = await page.evaluate(() => {
    // Seed competing lower-specificity margins so both resets are discriminating.
    const style = document.createElement("style");
    style.textContent =
      "formly-field { margin-top: 40px; margin-right: 40px; }";
    document.head.appendChild(style);

    const wrapper = document.createElement("div");
    wrapper.className = "sds-filters--horizontal";
    const search = document.createElement("div");
    search.className = "search-input";
    const field = document.createElement("formly-field");
    field.style.visibility = "hidden";
    search.appendChild(field);
    wrapper.appendChild(search);
    document.body.appendChild(wrapper);
    const cs = window.getComputedStyle(field);
    return { top: cs.marginTop, right: cs.marginRight };
  });

  // `.search-input formly-field { margin-right: 0; margin-top: 0 }`
  // — both were `0 !important`. Must beat the seeded 40px element rule.
  expect(margins.top).toBe("0px");
  expect(margins.right).toBe("0px");
});

// ── filter.scss: checkbox / radio background reset ────────────────────────────

test("filter: .usa-checkbox has a transparent background (override wins without !important)", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=form-elements-checkboxes--checkboxes");

  const bg = await page.evaluate(() => {
    // Seed a competing lower-specificity white background (bare `div`, 0,0,1)
    // so the assertion is discriminating: the SDS `.usa-checkbox` class rule
    // (0,1,0) must still win.
    const style = document.createElement("style");
    style.textContent = "div { background-color: white; }";
    document.head.appendChild(style);

    const el = document.createElement("div");
    el.className = "usa-checkbox";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    return window.getComputedStyle(el).backgroundColor;
  });

  // `.usa-checkbox { background-color: transparent }` — was `transparent !important`.
  // The SDS class rule (0,1,0) must still clear the seeded `div` white (0,0,1)
  // AND the USWDS `.usa-checkbox { background: #fff }` (equal specificity, SDS
  // wins on source order) to transparent, without the removed guard.
  expect(bg).toBe("rgba(0, 0, 0, 0)");
});

test("filter: .usa-radio has a transparent background (override wins without !important)", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=form-elements-radio--radio");

  const bg = await page.evaluate(() => {
    // Seed a competing lower-specificity white background (bare `div`, 0,0,1)
    // so the assertion is discriminating without beating the SDS `.usa-radio`
    // class rule (0,1,0) by source order.
    const style = document.createElement("style");
    style.textContent = "div { background-color: white; }";
    document.head.appendChild(style);

    const el = document.createElement("div");
    el.className = "usa-radio";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    return window.getComputedStyle(el).backgroundColor;
  });

  // `.usa-radio { background-color: transparent }` — was `transparent !important`.
  // The SDS class rule must still clear the seeded `div` white and the USWDS
  // `.usa-radio { background: #fff }` default to transparent.
  expect(bg).toBe("rgba(0, 0, 0, 0)");
});

// ── navigation.scss: collapsed secondary-item ::before suppression ────────────

test("navigation: collapsed .usa-nav__secondary-item::before has no content (suppression wins without !important)", async ({
  page,
}) => {
  // Force a narrow viewport so the at-media-max(tablet-lg) rule applies.
  await page.setViewportSize({ width: 600, height: 800 });
  await page.goto("/iframe.html?id=form-elements-input--input");

  const content = await page.evaluate(() => {
    // Seed a competing lower-specificity ::before separator (mimicking the
    // USWDS glyph) so the assertion is discriminating: only the SDS narrow
    // viewport `content: none` suppression can clear it.
    const style = document.createElement("style");
    style.textContent =
      '.usa-nav__secondary-item::before { content: "\\2014"; }';
    document.head.appendChild(style);

    const links = document.createElement("div");
    links.className = "usa-nav__secondary-links";
    const item = document.createElement("div");
    item.className = "usa-nav__secondary-item";
    item.style.visibility = "hidden";
    links.appendChild(item);
    document.body.appendChild(links);
    return window
      .getComputedStyle(item, "::before")
      .getPropertyValue("content");
  });

  // `@include at-media-max("tablet-lg") { &::before { content: none } }`
  // — was `none !important`. At <880px the SDS suppression must beat the seeded
  // separator glyph. `content: none` resolves to the `none`/empty computed value.
  expect(content === "none" || content === "").toBeTruthy();
});
