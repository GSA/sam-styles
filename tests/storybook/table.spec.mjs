import { test, expect } from "@playwright/test";

// Story: Components / Tables => iframe ID: components--tables
const STORY = "/iframe.html?id=components--tables";

test("standard table body cell has correct padding", async ({ page }) => {
  await page.goto(STORY);

  const cell = page.locator(".sds-table tbody .sds-table__row td").first();
  await expect(cell).toBeVisible();

  // At tablet breakpoint the usa-table override sets padding-left/right to 1.5rem/1rem = 24px/16px
  // and padding-top/bottom to 0.5rem = 8px
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

  // Inject the hover class and read computed CSS in a single evaluate call,
  // since the class addition doesn't trigger a DOM mutation event that
  // Playwright's locator polling can observe on the already-present td elements.
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
