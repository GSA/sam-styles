#!/usr/bin/env node
/**
 * Ratcheting warning-baseline gate for stylelint (`npm test` / `npm run lint`).
 *
 * Unlike sam-ui-elements' ESLint migration, sam-styles' `.stylelintrc` has no
 * pre-existing warn-first debt — every configured rule is error-severity, and
 * the library is clean today. This gate exists so the angular-upgrade
 * dashboard's quality metrics grid has a real, ratcheting number to read
 * (`stylelint-baseline.json`) instead of reporting "not published" for a
 * check that genuinely runs (see GSA/sam-styles#823). It mirrors
 * sam-ui-elements' `scripts/check-lint-baseline.mjs`, minus the per-workspace
 * split that repo needs and this one doesn't:
 *
 *   - New warnings above the recorded baseline fail the gate.
 *   - Any stylelint error fails the gate, regardless of the warning count.
 *   - Reducing warnings does NOT fail the gate; run with `--bump` to lock the
 *     improvement in as the new (lower) baseline.
 *
 * The baseline is a ratchet — `--bump` only ever lowers it. It never raises
 * it, so an accidental regression can't be "fixed" by re-bumping.
 *
 * Usage:
 *   node scripts/check-lint-baseline.mjs <path/to/stylelint-report.json>
 *   node scripts/check-lint-baseline.mjs --bump <path/to/stylelint-report.json>
 *
 * The stylelint report is produced with `--formatter json --output-file <path>`.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const baselinePath = resolve(scriptDir, "..", "stylelint-baseline.json");

const args = process.argv.slice(2);
const bump = args.includes("--bump");
const positional = args.filter((arg) => !arg.startsWith("--"));
const [reportArg] = positional;

if (!reportArg) {
  console.error(
    "Usage: node scripts/check-lint-baseline.mjs [--bump] <path/to/stylelint-report.json>"
  );
  process.exit(1);
}

const reportPath = resolve(reportArg);

let report;
try {
  report = JSON.parse(readFileSync(reportPath, "utf8"));
} catch (error) {
  console.error(`✖ Could not read stylelint report at ${reportPath}`);
  console.error(`  ${error.message}`);
  console.error(
    '  Run `stylelint "sam-styles/**/*.scss" --formatter json --output-file <path>` first to generate it.'
  );
  process.exit(1);
}

let baseline;
try {
  baseline = JSON.parse(readFileSync(baselinePath, "utf8"));
} catch (error) {
  console.error(`✖ Could not read lint baseline at ${baselinePath}`);
  console.error(`  ${error.message}`);
  process.exit(1);
}

const totals = report.reduce(
  (acc, result) => {
    for (const warning of result.warnings ?? []) {
      if (warning.severity === "error") {
        acc.errors += 1;
      } else {
        acc.warnings += 1;
      }
    }
    return acc;
  },
  { errors: 0, warnings: 0 }
);

if (bump) {
  const current = baseline.warnings;
  if (!Number.isFinite(current)) {
    console.error(`✖ missing or invalid entry in ${baselinePath}`);
    process.exit(1);
  }

  // Ratchet only ever moves down.
  const next = Math.min(current, totals.warnings);

  if (totals.errors > 0) {
    console.error(
      `✖ ${totals.errors} stylelint error(s) found; fix errors before bumping the baseline.`
    );
    process.exit(1);
  }

  if (next === current) {
    console.log(
      `= baseline already at or below current warnings (${current}); nothing to bump.`
    );
    process.exit(0);
  }

  writeFileSync(
    baselinePath,
    `${JSON.stringify({ ...baseline, warnings: next }, null, 2)}\n`
  );
  console.log(
    `↓ baseline lowered ${current} → ${next} (measured ${totals.warnings}). Commit this change on its own.`
  );
  process.exit(0);
}

if (!Number.isFinite(baseline.warnings)) {
  console.error(`✖ missing or invalid entry in ${baselinePath}`);
  process.exit(1);
}

if (totals.errors > 0) {
  console.error(
    `✖ ${totals.errors} stylelint error(s) found. Errors are never allowed, regardless of the warning baseline.`
  );
  process.exit(1);
}

if (totals.warnings > baseline.warnings) {
  console.error("✖ stylelint warning baseline exceeded.");
  console.error(`  expected: <= ${baseline.warnings} warnings`);
  console.error(`  actual:   ${totals.warnings} warnings`);
  console.error(
    "\n  This change introduced new stylelint warnings beyond the accepted baseline.\n" +
      "  Fix the new findings, or if you intentionally reduced warnings elsewhere,\n" +
      `  run \`node scripts/check-lint-baseline.mjs --bump ${reportArg}\` and commit\n` +
      "  the lowered baseline as its own change."
  );
  process.exit(1);
}

console.log(
  `✓ ${totals.warnings} warnings (baseline ${baseline.warnings}), ${totals.errors} errors. Lint baseline gate passed.`
);
