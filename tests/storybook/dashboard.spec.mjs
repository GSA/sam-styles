import { test, expect } from "@playwright/test";

// ─── Dashboard / Event ────────────────────────────────────────────────────────

test.describe("Dashboard Event regression", () => {
  test("Event story: .sds-feed is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=components-dashboard-event--event");
    const feed = page.locator(".sds-feed").first();
    await expect(feed).toBeVisible();
  });

  test("Event story: event date label has a non-zero font-size", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-dashboard-event--event");
    const date = page.locator(".event .summary .date").first();
    await expect(date).toBeVisible();
    const fontSize = await date.evaluate((el) =>
      parseFloat(getComputedStyle(el).fontSize)
    );
    expect(fontSize).toBeGreaterThan(0);
  });

  test("Event story: action links are rendered inside events", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-dashboard-event--event");
    const actions = page.locator(".event .summary a.action");
    await expect(actions.first()).toBeVisible();
    const count = await actions.count();
    expect(count).toBeGreaterThan(0);
  });
});

// ─── Dashboard / Statistics Alt ───────────────────────────────────────────────

test.describe("Dashboard Statistics Alt regression", () => {
  test("Alt story: .sds-statistics--alt is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=components-dashboard-statistics--alt");
    const stats = page.locator(".sds-statistics--alt").first();
    await expect(stats).toBeVisible();
  });

  test("Alt story: statistic-alt button has a positive width", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-dashboard-statistics--alt");
    const btn = page.locator(".statistic-alt").first();
    await expect(btn).toBeVisible();
    const width = await btn.evaluate((el) =>
      parseFloat(getComputedStyle(el).width)
    );
    expect(width).toBeGreaterThan(0);
  });

  test("Alt story: statistic value is rendered with content", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-dashboard-statistics--alt");
    const value = page.locator(".statistic-alt .value").first();
    await expect(value).toBeVisible();
    const text = await value.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });
});

// ─── Dashboard / Statistics Default ──────────────────────────────────────────

test.describe("Dashboard Statistics Default regression", () => {
  test("Default story: .sds-statistics container is visible", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-dashboard-statistics--default");
    const stats = page.locator(".sds-statistics").first();
    await expect(stats).toBeVisible();
  });

  test("Default story: .circular span inside green statistic has a themed background", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-dashboard-statistics--default");
    const circle = page.locator(".statistic.green .circular").first();
    await expect(circle).toBeVisible();
    // .green .circular applies a themed background-color (e.g. rgb(234, 242, 235))
    const bg = await circle.evaluate(
      (el) => getComputedStyle(el).backgroundColor
    );
    expect(bg).not.toBe("rgba(0, 0, 0, 0)");
  });

  test("Default story: .circular span has a border-radius making it circular", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-dashboard-statistics--default");
    // Use the green statistic's circular span which is visible
    const circle = page.locator(".statistic.green .circular").first();
    await expect(circle).toBeVisible();
    // A circular shape requires border-radius > 0
    const radius = await circle.evaluate((el) =>
      parseFloat(getComputedStyle(el).borderRadius)
    );
    expect(radius).toBeGreaterThan(0);
  });
});

// ─── Dashboard / Tile (SDStile) ───────────────────────────────────────────────

test.describe("Dashboard Tile regression", () => {
  test("SDStile story: .sds-tile is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=components-dashboard-tile--sd-stile");
    const tile = page.locator(".sds-tile").first();
    await expect(tile).toBeVisible();
  });

  test("SDStile story: .sds-tile__body header is rendered", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=components-dashboard-tile--sd-stile");
    const header = page.locator(".sds-tile__body header").first();
    await expect(header).toBeVisible();
    const text = await header.textContent();
    expect(text?.trim().length).toBeGreaterThan(0);
  });

  test("SDStile story: .sds-list items are rendered", async ({ page }) => {
    await page.goto("/iframe.html?id=components-dashboard-tile--sd-stile");
    const items = page.locator(".sds-tile .sds-list li");
    await expect(items.first()).toBeVisible();
    const count = await items.count();
    expect(count).toBeGreaterThan(0);
  });
});

// ─── Dashboard / Tile Outline (SDStile-outline) ───────────────────────────────

test.describe("Dashboard Tile Outline regression", () => {
  test("SDStileOutline story: iframe body loads without error", async ({
    page,
  }) => {
    // The SDStile-outline story renders an empty template; verify the
    // iframe loads and body is attached to the DOM. This confirms Storybook
    // renders the story without a page-level crash — no JS error check is made.
    await page.goto(
      "/iframe.html?id=components-dashboard-tile--sd-stile-outline"
    );
    await expect(page.locator("body")).toBeAttached();
  });
});
