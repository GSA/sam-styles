import { test, expect } from "@playwright/test";

// Story: Components / TreeTables => iframe ID: components--tree-tables
const STORY = "/iframe.html?id=components--tree-tables";

test("tree-table header cells have accent-cool-lighter background", async ({
  page,
}) => {
  await page.goto(STORY);

  const th = page.locator(".sds-tree-table thead th").first();
  await expect(th).toBeVisible();
  // u-bg("accent-cool-lighter") — in this theme the accent-cool-lighter token resolves
  // to the same value as base-lightest: gray-warm-2 = rgb(245, 245, 240)
  await expect(th).toHaveCSS("background-color", "rgb(245, 245, 240)");
});

test("expanded row data cells get base-lightest background", async ({
  page,
}) => {
  await page.goto(STORY);

  // tr[aria-expanded] td styling (not the first/icon cell)
  const expandedCell = page
    .locator("tr[aria-expanded] td:not(:first-child)")
    .first();
  await expect(expandedCell).toBeVisible();
  // background-color: color("base-lightest")
  await expect(expandedCell).toHaveCSS(
    "background-color",
    "rgb(249, 249, 247)"
  );
});

test("level-1 rows have no extra indentation", async ({ page }) => {
  await page.goto(STORY);

  // tr[aria-level="1"] td:nth-child(2) left = (1 * 1.5) - 1.5 = 0rem
  const cell = page.locator("tr[aria-level='1'] td:nth-child(2)").first();
  await expect(cell).toBeVisible();
  await expect(cell).toHaveCSS("left", "0px");
});

test("level-2 rows are indented by 1.5rem relative to level-1", async ({
  page,
}) => {
  await page.goto(STORY);

  // tr[aria-level="2"] td:nth-child(2) left = (2 * 1.5) - 1.5 = 1.5rem = 24px
  const cell = page.locator("tr[aria-level='2'] td:nth-child(2)").first();
  await expect(cell).toBeVisible();
  await expect(cell).toHaveCSS("left", "24px");
});

test("selected tree-table row has secondary-color left border", async ({
  page,
}) => {
  await page.goto(STORY);

  const cell = page
    .locator(".sds-tree-table__row--selected td:nth-child(2)")
    .first();
  await expect(cell).toBeVisible();
  // u-border-left("secondary") — secondary color = rgb(38, 114, 222)
  await expect(cell).toHaveCSS("border-left-color", "rgb(38, 114, 222)");
});

test("selected tree-table row has secondary-color top and bottom borders", async ({
  page,
}) => {
  await page.goto(STORY);

  const cell = page
    .locator(".sds-tree-table__row--selected td:nth-child(2)")
    .first();
  await expect(cell).toBeVisible();
  await expect(cell).toHaveCSS("border-top-color", "rgb(38, 114, 222)");
  await expect(cell).toHaveCSS("border-bottom-color", "rgb(38, 114, 222)");
});

test("tree-table expand button svg has ink background and circular shape", async ({
  page,
}) => {
  await page.goto(STORY);

  // The expanded level-1 row has a .usa-button > svg in td:first-child.
  // After the nesting-depth refactor the rule was lifted to a flat selector:
  //   table.sds-tree-table tbody tr:not(.text-center) td:first-child .usa-button svg
  //   { background-color: color("ink"); border-radius: 50%; }
  // color("ink") in the SAM-STYLES theme = gray-warm-90 = #2e2e2a = rgb(46, 46, 42).
  const svg = page
    .locator("tr[aria-expanded] td:first-child .usa-button svg")
    .first();
  await expect(svg).toBeVisible();

  // Fails if the lifted .usa-button svg rule is removed from treetable.scss
  await expect(svg).toHaveCSS("background-color", "rgb(46, 46, 42)");
  await expect(svg).toHaveCSS("border-radius", "50%");
});
