/**
 * scripts/coverage-report.mjs
 *
 * Component/Story Coverage Report
 * ================================
 * For a SCSS-only library with no JS runtime, "coverage" means:
 *   - Every component that has a Storybook story (.stories.js) should also
 *     have at least one Playwright smoke-test spec in tests/storybook/.
 *
 * Metric: covered stories / total stories  (× 100 = %)
 *
 * Outputs:
 *   coverage/component-coverage.json   — machine-readable results
 *   coverage/component-coverage.md     — human-readable markdown table
 *
 * Exits:
 *   0  — coverage meets or exceeds COVERAGE_THRESHOLD (default 35%)
 *   1  — coverage is below threshold (fails CI)
 *
 * Usage:
 *   node scripts/coverage-report.mjs [--threshold=<n>]
 */

import {
  readdirSync,
  readFileSync,
  mkdirSync,
  writeFileSync,
  existsSync,
} from "fs";
import { join, dirname, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ── Config ────────────────────────────────────────────────────────────────────

const PACKAGES_DIR = join(ROOT, "sam-styles", "packages");
const SPECS_DIR = join(ROOT, "tests", "storybook");
const OUT_DIR = join(ROOT, "coverage");

// Parse --threshold=N from argv, fallback to env var, then default 35
const thresholdArg = process.argv.find((a) => a.startsWith("--threshold="));
const THRESHOLD = thresholdArg
  ? parseInt(thresholdArg.split("=")[1], 10)
  : process.env.COVERAGE_THRESHOLD
    ? parseInt(process.env.COVERAGE_THRESHOLD, 10)
    : 35;

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Recursively find all files matching a predicate under a directory. */
function walkFiles(dir, predicate) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkFiles(full, predicate));
    } else if (predicate(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

/**
 * Build a set of "covered" story keys from Playwright spec files.
 * We scan each spec for page.goto() calls containing iframe.html?id=
 * and extract the story id prefix (e.g. "components-accordion").
 * We also record raw spec filenames (stem) as fallback keys.
 */
function buildCoveredSet(specsDir) {
  const covered = new Set();
  const specFiles = readdirSync(specsDir).filter((f) =>
    f.endsWith(".spec.mjs")
  );

  for (const file of specFiles) {
    // Stem as a fallback key (e.g. "accordion" from "accordion.spec.mjs")
    const stem = file.replace(/\.spec\.mjs$/, "");
    covered.add(stem);

    const content = readFileSync(join(specsDir, file), "utf8");

    // Extract all storybook iframe IDs: ?id=components-accordion--multiselectable
    const idMatches = content.matchAll(/[?&]id=([^"'&\s]+)/g);
    for (const [, id] of idMatches) {
      // e.g. "components-accordion--multiselectable" → add full id and prefix
      covered.add(id);
      // Add the story-group prefix before "--"
      const prefix = id.split("--")[0]; // "components-accordion"
      covered.add(prefix);
      // Also add just the last segment of the prefix (component name)
      const parts = prefix.split("-");
      covered.add(parts[parts.length - 1]); // "accordion"
    }
  }

  return covered;
}

/**
 * Derive a match key from a story file path.
 * e.g. "components/accordion/accordion.stories.js"
 *   → tries: "components-accordion", "accordion"
 */
function storyMatchKeys(relPath) {
  // relPath like "components/accordion/accordion.stories.js"
  const segments = relPath.replace(/\\/g, "/").split("/");
  // Remove filename
  segments.pop();
  // Component name = last dir segment
  const componentName = segments[segments.length - 1];
  // Group prefix = join all segments with "-"
  const prefix = segments.join("-");

  return [prefix, componentName, relPath];
}

// ── Main ──────────────────────────────────────────────────────────────────────

const storyFiles = walkFiles(PACKAGES_DIR, (name) =>
  name.endsWith(".stories.js")
);
const coveredKeys = buildCoveredSet(SPECS_DIR);

const rows = storyFiles.map((absPath) => {
  const relPath = relative(PACKAGES_DIR, absPath);
  const keys = storyMatchKeys(relPath);
  const isCovered = keys.some((k) => coveredKeys.has(k));
  return { path: relPath, covered: isCovered };
});

const total = rows.length;
const covered = rows.filter((r) => r.covered).length;
const uncovered = total - covered;
const pct = total === 0 ? 100 : Math.round((covered / total) * 100);
const passed = pct >= THRESHOLD;

// ── Write outputs ─────────────────────────────────────────────────────────────

mkdirSync(OUT_DIR, { recursive: true });

// JSON
const json = {
  threshold: THRESHOLD,
  total,
  covered,
  uncovered,
  percentage: pct,
  passed,
  stories: rows,
};
writeFileSync(
  join(OUT_DIR, "component-coverage.json"),
  JSON.stringify(json, null, 2)
);

// Markdown
const statusEmoji = passed ? "✅" : "❌";
const uncoveredList = rows
  .filter((r) => !r.covered)
  .map((r) => `| \`${r.path}\` | ❌ No spec |`)
  .join("\n");

const coveredList = rows
  .filter((r) => r.covered)
  .map((r) => `| \`${r.path}\` | ✅ Covered |`)
  .join("\n");

const md = `# Component / Story Coverage Report

${statusEmoji} **${pct}% coverage** (${covered} / ${total} stories have Playwright specs) — threshold: ${THRESHOLD}%

## Summary

| Metric | Value |
|--------|-------|
| Total stories | ${total} |
| Covered by specs | ${covered} |
| Not covered | ${uncovered} |
| Coverage % | ${pct}% |
| Threshold | ${THRESHOLD}% |
| Status | ${passed ? "PASS ✅" : "FAIL ❌"} |

## Coverage metric

For this SCSS-only library, "coverage" means every Storybook story (**.stories.js**)
in \`sam-styles/packages/\` has at least one matching Playwright spec in \`tests/storybook/\`.

## Uncovered stories

${uncovered === 0 ? "_All stories are covered_ 🎉" : `| Story file | Status |\n|------------|--------|\n${uncoveredList}`}

## Covered stories

| Story file | Status |
|------------|--------|
${coveredList}
`;

writeFileSync(join(OUT_DIR, "component-coverage.md"), md);

// ── Console output ────────────────────────────────────────────────────────────

process.stdout.write(`\nComponent/Story Coverage\n`);
process.stdout.write(`  Stories:   ${total}\n`);
process.stdout.write(`  Covered:   ${covered}\n`);
process.stdout.write(`  Uncovered: ${uncovered}\n`);
process.stdout.write(`  Coverage:  ${pct}% (threshold: ${THRESHOLD}%)\n`);
process.stdout.write(`  Status:    ${passed ? "PASS ✅" : "FAIL ❌"}\n\n`);

if (!passed) {
  process.stderr.write(
    `Coverage ${pct}% is below the required threshold of ${THRESHOLD}%.\n` +
      `Add Playwright specs in tests/storybook/ for the uncovered stories listed above.\n` +
      `See coverage/component-coverage.md for the full report.\n`
  );
  process.exit(1);
}

process.exit(0);
