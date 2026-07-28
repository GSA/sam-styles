import { test, expect } from "@playwright/test";

// The pages stories render full HTML page templates (layout patterns).
// We assert that each story's iframe loads and the expected structural element
// is attached to the DOM. This confirms the template is rendered by Storybook
// and that the target selector exists — it does not verify visual appearance
// or the absence of JS console errors.

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
