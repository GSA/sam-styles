/**
 * scripts/check-coverage-workflow.mjs
 *
 * Validates the component/story coverage contract (GSA/sam-styles#822):
 *   - coverage-floor.json is a committed ratchet the coverage script reads
 *     its default threshold from, and the dashboard can read directly.
 *   - coverage/component-coverage.json is committed (not just a CI artifact)
 *     so the dashboard has a machine-readable result to read.
 *   - CI verifies the committed report can't silently go stale.
 *   - test.yml also runs on push to master, not just pull_request.
 *
 * Mirrors the assertion-script style of scripts/check-security-workflow.mjs.
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";

const floor = JSON.parse(readFileSync("coverage-floor.json", "utf8"));
const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
const testWorkflow = readFileSync(".github/workflows/test.yml", "utf8");

// ── coverage-floor.json is a single dashboard-readable ratchet ─────────────

assert.equal(
  typeof floor.lines,
  "number",
  "coverage-floor.json must have a numeric `lines` percentage"
);
assert.ok(
  floor.lines >= 0 && floor.lines <= 100,
  "coverage-floor.json's `lines` must be a percentage between 0 and 100"
);
assert.equal(
  Object.keys(floor).length,
  1,
  "coverage-floor.json should only carry the single `lines` percentage this " +
    "repo's story-smoke metric supports — don't force the four-key " +
    "statements/branches/functions/lines shape used by line-coverage repos"
);

// ── the coverage script defaults its threshold to the floor, not a literal ─

assert.doesNotMatch(
  packageJson.scripts?.coverage ?? "",
  /--threshold=/,
  "the coverage script must not hardcode a --threshold; it should default " +
    "to coverage-floor.json so the floor is the single source of truth"
);

// ── coverage/component-coverage.json is committed, not gitignored ──────────

const checkIgnore = spawnSync(
  "git",
  ["check-ignore", "-q", "coverage/component-coverage.json"],
  { encoding: "utf8" }
);
assert.equal(
  checkIgnore.status,
  1,
  "coverage/component-coverage.json must NOT be gitignored — it needs to be " +
    "committed so the dashboard can read it"
);

// ── the rest of coverage/ stays gitignored (CI artifacts only) ─────────────

const restStillIgnored = spawnSync(
  "git",
  ["check-ignore", "-q", "coverage/component-coverage.md"],
  { encoding: "utf8" }
);
assert.equal(
  restStillIgnored.status,
  0,
  "coverage/component-coverage.md should remain gitignored — only the JSON " +
    "result is committed"
);

// ── CI guards against a stale committed report ──────────────────────────────

assert.match(
  testWorkflow,
  /git diff --exit-code -- coverage\/component-coverage\.json/,
  "test.yml must fail if the committed coverage report doesn't match a " +
    "freshly generated one, so it can't silently go stale"
);

// ── CI runs on push to master too, not just pull_request ───────────────────

assert.match(
  testWorkflow,
  /push:\s*\n\s*branches:\s*\[master\]/,
  "test.yml must also trigger on push to master so the coverage/a11y/lint " +
    "suite runs against the default branch itself"
);

console.log("Coverage workflow contract is valid.");
