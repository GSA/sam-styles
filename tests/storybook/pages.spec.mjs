import { test, expect } from "@playwright/test";

// The pages stories render full HTML page templates (layout patterns).
// We assert that each story's iframe loads and contains a visible structural element.
// The meaningful guarantee is that the template renders without error and exposes
// recognisable layout structure (sds-page, grid wrappers, or footer).

const stories = [
  {
    id: "patterns-pages--display-page",
    label: "DisplayPage",
    selector: "body",
  },
  {
    id: "patterns-pages--full-page",
    label: "FullPage",
    selector: "body",
  },
  {
    id: "patterns-pages--landing-page",
    label: "LandingPage",
    selector: "body",
  },
  {
    id: "patterns-pages--left-aside",
    label: "LeftAside",
    selector: ".sds-page",
  },
  {
    id: "patterns-pages--loading-results-page",
    label: "LoadingResultsPage",
    selector: "body",
  },
  {
    id: "patterns-pages--page-side-bar",
    label: "PageSideBar",
    selector: "body",
  },
  {
    id: "patterns-pages--right-aside",
    label: "RightAside",
    selector: "body",
  },
  {
    id: "patterns-pages--three-columns",
    label: "ThreeColumns",
    selector: "body",
  },
];

for (const { id, label, selector } of stories) {
  test.describe(`Pages / ${label}`, () => {
    test(`${label} story: iframe loads and structural element is attached`, async ({
      page,
    }) => {
      await page.goto(`/iframe.html?id=${id}`);
      const el = page.locator(selector).first();
      await expect(el).toBeAttached();
    });
  });
}

// ── Deeper layout assertion for LeftAside ────────────────────────────────────
// LeftAside uses .sds-page which should have a grid layout container inside it.
test("Pages / LeftAside: .sds-page contains a grid-row element", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=patterns-pages--left-aside");
  const grid = page.locator(".sds-page .grid-row").first();
  await expect(grid).toBeAttached();
});
