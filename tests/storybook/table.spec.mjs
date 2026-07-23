import { test, expect } from "@playwright/test";

// Story: Components / Tables => iframe ID: components--tables
const STORY = "/iframe.html?id=components--tables";

test("standard table body cell has correct padding", async ({ page }) => {
  await page.goto(STORY);

  const cell = page.locator(".sds-table tbody .sds-table__row td").first();
  await expect(cell).toBeVisible();

  // %sds-table--cell sets u-padding-y(1) / u-padding-x(2) = 8px / 16px, but the
  // responsive @include at-media("tablet") block overrides body-cell padding to
  // left: 1.5rem = 24px, right: 1rem = 16px at tablet+ widths. The Playwright
  // config runs Desktop Chrome (>= tablet), so the tablet override applies here.
  await expect(cell).toHaveCSS("padding-top", "8px");
  await expect(cell).toHaveCSS("padding-bottom", "8px");
  await expect(cell).toHaveCSS("padding-left", "24px");
  await expect(cell).toHaveCSS("padding-right", "16px");
});

test("table header cells have the correct background color", async ({
  page,
}) => {
  await page.goto(STORY);

  const th = page.locator(".sds-table thead th").first();
  await expect(th).toBeVisible();
  // u-bg("base-lighter") / $theme-table-header-background-color resolved value
  await expect(th).toHaveCSS("background-color", "rgb(245, 245, 240)");
});

test("even rows in a single-tbody table get tiger-stripe background", async ({
  page,
}) => {
  await page.goto(STORY);

  // The first table has a single tbody (no subsection class), so tiger stripes apply
  const evenCell = page
    .locator(
      ".sds-table tbody:only-of-type .sds-table__row:nth-of-type(even) td"
    )
    .first();
  await expect(evenCell).toBeVisible();
  // u-bg("base-lightest")
  await expect(evenCell).toHaveCSS("background-color", "rgb(249, 249, 247)");
});

test("hovered row cells get the hover background color", async ({ page }) => {
  await page.goto(STORY);
  await page.waitForLoadState("networkidle");

  // Inject the hover class and read computed CSS in a single evaluate call.
  // Note: we use evaluate() here rather than Playwright locator polling because
  // the class is added dynamically and we want to read the style in the same
  // synchronous tick — avoiding a race between class addition and style resolution.
  const hoveredBg = await page.evaluate(() => {
    const row = document.querySelector(".sds-table tbody tr");
    if (!row) return null;
    row.classList.add("sds-table__row--hovered");
    const td = document.querySelector(
      ".sds-table tr.sds-table__row--hovered td"
    );
    return td ? getComputedStyle(td).backgroundColor : null;
  });

  // u-bg("base-light") !important
  expect(hoveredBg).toBe("rgb(201, 201, 201)");
});

test("subsection header row has accent-cool-lighter highlight background", async ({
  page,
}) => {
  await page.goto(STORY);

  const subsectionHeader = page
    .locator("tbody.sds-table__subsection tr:first-child th")
    .first();
  await expect(subsectionHeader).toBeVisible();
  // %sds-table--highlight => u-bg("accent-cool-lighter")
  await expect(subsectionHeader).toHaveCSS(
    "background-color",
    "rgb(239, 246, 251)"
  );
});

test("table container has a visible border", async ({ page }) => {
  await page.goto(STORY);

  const container = page.locator(".sds-table__container").first();
  await expect(container).toBeVisible();
  // u-border("base-light") — confirms the container border is applied
  await expect(container).toHaveCSS("border-color", "rgb(201, 201, 201)");
  await expect(container).toHaveCSS("border-style", "solid");
});

test("stacked-header table first td has 0.75rem left padding at mobile viewport", async ({
  page,
}) => {
  // Set viewport to mobile-lg - 1px = 479px to activate at-media-max("mobile-lg") rules.
  // The USWDS mobile-lg breakpoint is 30rem; at-media-max fires at max-width 29.99em ≈ 479px.
  await page.setViewportSize({ width: 479, height: 800 });
  await page.goto(STORY);

  // The stacked-header rule was refactored from:
  //   tr { td { &:first-child { padding-left: 0.75rem } } }  (depth-5 violation when accounting
  //     for the full chain: .usa-table &--stacked-header > @media > tr > td > &:first-child)
  // to:
  //   tr td:first-child { padding-left: 0.75rem }            (flat, same output)
  // The .usa-table--stacked-header tables in table.html are inside an HTML comment, so
  // we inject a minimal table with that class directly into the page body to exercise
  // the compiled CSS rule at mobile viewport width.
  const paddingLeft = await page.evaluate(() => {
    // Build: table.usa-table.usa-table--stacked-header > tbody > tr > td:first-child
    const table = document.createElement("table");
    table.className = "usa-table usa-table--stacked-header";
    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.setAttribute("data-label", "Test");
    td.textContent = "test cell";
    tr.appendChild(td);
    tbody.appendChild(tr);
    table.appendChild(tbody);
    document.body.appendChild(table);
    const result = getComputedStyle(td).paddingLeft;
    table.remove();
    return result;
  });

  // `.usa-table--stacked-header tr td:first-child { padding-left: 0.75rem = 12px }`
  // Fails if the refactored selector no longer matches td:first-child
  expect(paddingLeft).toBe("12px");
});

// ─── Tablet outer-border block ──────────────────────────────────────
// These tests cover the `&:not(.usa-table--borderless):not(.sds-tree-table)`
// tablet override block that was flattened (not removed) in issue #743. They
// assert the observable border output at a tablet+ viewport so the block cannot
// be silently dropped again. base-light = #c9c9c9 = rgb(201, 201, 201).

test("bordered table header first cell has a left border at tablet width", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1024, height: 800 });
  await page.goto(STORY);

  const firstTh = page.locator(".sds-table thead th:first-child").first();
  await expect(firstTh).toBeVisible();

  // `... thead th:first-child:not(.mat-header-cell) { u-border-left("base-light", 1px) }`
  await expect(firstTh).toHaveCSS("border-left-color", "rgb(201, 201, 201)");
  await expect(firstTh).toHaveCSS("border-left-width", "1px");
  await expect(firstTh).toHaveCSS("border-left-style", "solid");
});

test("bordered table header last cell has a right border at tablet width", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1024, height: 800 });
  await page.goto(STORY);

  const lastTh = page.locator(".sds-table thead th:last-child").first();
  await expect(lastTh).toBeVisible();

  // `... thead th:last-child:not(.mat-header-cell) { u-border-right("base-light", 1px) }`
  await expect(lastTh).toHaveCSS("border-right-color", "rgb(201, 201, 201)");
  await expect(lastTh).toHaveCSS("border-right-width", "1px");
});

test("bordered table header cells have a top border at tablet width", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1024, height: 800 });
  await page.goto(STORY);

  const firstTh = page.locator(".sds-table thead th:first-child").first();
  await expect(firstTh).toBeVisible();

  // `... thead th:not(.mat-header-cell) { u-border-top("base-light", 1px) }`
  await expect(firstTh).toHaveCSS("border-top-color", "rgb(201, 201, 201)");
  await expect(firstTh).toHaveCSS("border-top-width", "1px");
});

test("bordered table last body row cell has a bottom border at tablet width", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1024, height: 800 });
  await page.goto(STORY);
  await page.locator(".sds-table tbody tr").first().waitFor();

  // `... tbody tr:last-child td:not(.mat-cell) { u-border-bottom("base-light", 1px) }`
  const lastRowTd = await page.evaluate(() => {
    // First .sds-table in the story is the bordered example.
    const table = document.querySelector(".sds-table");
    const rows = table ? table.querySelectorAll("tbody tr") : [];
    const last = rows[rows.length - 1];
    const td = last ? last.querySelector("td") : null;
    if (!td) return null;
    const s = getComputedStyle(td);
    return {
      color: s.borderBottomColor,
      width: s.borderBottomWidth,
      style: s.borderBottomStyle,
    };
  });

  expect(lastRowTd).not.toBeNull();
  expect(lastRowTd.color).toBe("rgb(201, 201, 201)");
  expect(lastRowTd.width).toBe("1px");
  expect(lastRowTd.style).toBe("solid");
});

// ─── Tablet header padding + background block ──────────────────────
// Covers the flat `@include at-media("tablet") { thead th, thead td { ... } }`
// block reintroduced in issue #743.

test("table header cells get tablet padding and header background", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1024, height: 800 });
  await page.goto(STORY);

  const firstTh = page.locator(".sds-table thead th:first-child").first();
  await expect(firstTh).toBeVisible();

  // `thead th { padding-left: 1.5rem = 24px; padding-right: 1rem = 16px;
  //   padding-top/bottom: 0.5rem = 8px; background-color: $theme-table-header-background-color }`
  await expect(firstTh).toHaveCSS("padding-left", "24px");
  await expect(firstTh).toHaveCSS("padding-right", "16px");
  await expect(firstTh).toHaveCSS("padding-top", "8px");
  await expect(firstTh).toHaveCSS("padding-bottom", "8px");
  await expect(firstTh).toHaveCSS("background-color", "rgb(245, 245, 240)");
});

test("table body cells clear internal top/bottom borders at tablet width", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1024, height: 800 });
  await page.goto(STORY);
  await page.locator(".sds-table tbody tr").first().waitFor();

  // `tbody tr th, tbody tr td { border-top: 0; border-bottom: 0; ... }` — internal
  // horizontal borders are cleared so only outer edges remain. Use a middle row so
  // it is neither the first nor last body row.
  const middle = await page.evaluate(() => {
    const table = document.querySelector(".sds-table");
    const rows = table ? table.querySelectorAll("tbody tr") : [];
    const td = rows.length > 1 ? rows[1].querySelector("td") : null;
    if (!td) return null;
    const s = getComputedStyle(td);
    return { top: s.borderTopWidth, bottom: s.borderBottomWidth };
  });

  expect(middle).not.toBeNull();
  expect(middle.top).toBe("0px");
  expect(middle.bottom).toBe("0px");
});
