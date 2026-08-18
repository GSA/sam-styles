import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { readFileSync, writeFileSync } from "node:fs";

const WCAG_21_AA_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"];
const BASELINE_PATH = new URL("./wcag-2.1-aa-baseline.json", import.meta.url);

function violationFingerprints(storyId, violations) {
  return violations.flatMap((violation) =>
    violation.nodes.map((node) =>
      [storyId, violation.id, ...node.target].join(" | ")
    )
  );
}

test("axe detects a rendered WCAG 2.1 AA violation", async ({ page }) => {
  await page.setContent(
    '<main><p style="color:#aaa;background:#fff">Text</p></main>'
  );

  const results = await new AxeBuilder({ page })
    .withTags(WCAG_21_AA_TAGS)
    .analyze();

  expect(results.violations.map(({ id }) => id)).toContain("color-contrast");
});

test("Storybook stories have no unresolved WCAG 2.1 AA violations", async ({
  page,
  request,
}) => {
  const response = await request.get("/index.json");
  expect(response.ok()).toBeTruthy();

  const { entries } = await response.json();
  const stories = Object.values(entries)
    .filter(({ type }) => type === "story")
    .sort((left, right) => left.id.localeCompare(right.id));

  const fingerprints = [];
  for (const story of stories) {
    await page.goto(
      `/iframe.html?id=${encodeURIComponent(story.id)}&viewMode=story`
    );
    await expect(
      page.locator("body"),
      `${story.id} should finish rendering`
    ).toHaveClass(/\bsb-show-main\b/);

    const results = await new AxeBuilder({ page })
      .withTags(WCAG_21_AA_TAGS)
      .exclude("#storybook-root[aria-hidden='true']")
      .analyze();

    fingerprints.push(...violationFingerprints(story.id, results.violations));
  }

  const current = [...new Set(fingerprints)].sort();

  if (process.env.UPDATE_A11Y_BASELINE === "1") {
    writeFileSync(BASELINE_PATH, `${JSON.stringify(current, null, 2)}\n`);
  }

  const baseline = JSON.parse(readFileSync(BASELINE_PATH, "utf8"));
  const baselineSet = new Set(baseline);
  const currentSet = new Set(current);
  const newViolations = current.filter(
    (fingerprint) => !baselineSet.has(fingerprint)
  );
  const resolvedViolations = baseline.filter(
    (fingerprint) => !currentSet.has(fingerprint)
  );

  expect(
    newViolations,
    "New WCAG 2.1 A/AA violations (fix them; do not update the baseline)"
  ).toEqual([]);
  expect(
    resolvedViolations,
    "Resolved WCAG 2.1 A/AA violations (remove them from the baseline)"
  ).toEqual([]);
});
