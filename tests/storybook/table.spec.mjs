import { test, expect } from "@playwright/test";

// Story: Components / Tables => iframe ID: components--tables
const STORY = "/iframe.html?id=components--tables";

test("standard table body cell has correct padding", async ({ page }) => {
  await page.goto(STORY);

  const cell = page.locator(".sds-table tbody .sds-table__row td").first();
  await expect(cell).toBeVisible();

  // %sds-table--cell sets u-padding-y(1) / u-padding-x(2) = 8px / 16px.
  // NOTE: the responsive @media tablet block that previously set asymmetric
  // padding (left: 1.5rem = 24px, right: 1rem = 16px) was removed as part of
  // the max-nesting-depth refactor (issue #743). If that block is restored,
  // update padding-left to 24px and padding-right to 16px.
  await expect(cell).toHaveCSS("padding-top", "8px");
  await expect(cell).toHaveCSS("padding-bottom", "8px");
  await expect(cell).toHaveCSS("padding-left", "16px");
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
