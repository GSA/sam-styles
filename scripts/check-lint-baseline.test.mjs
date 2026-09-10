/**
 * Tests for the stylelint warning-baseline ratchet gate
 * (scripts/check-lint-baseline.mjs).
 *
 * Mirrors the style of check-zap-results.test.mjs: plain top-level assertions
 * invoking the script as a child process against temp fixture files, so we
 * exercise the real CLI surface (exit codes, --bump, error precedence,
 * malformed baselines) rather than internals.
 *
 * Run: node scripts/check-lint-baseline.test.mjs
 */
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";

const script = resolve("scripts/check-lint-baseline.mjs");
const baselinePath = resolve("stylelint-baseline.json");

/** Run the gate, returning { status, stdout, stderr }. */
function run(args) {
  const result = spawnSync(process.execPath, [script, ...args], {
    encoding: "utf8",
  });
  return {
    status: result.status,
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? "",
  };
}

/** Writes a minimal stylelint JSON-formatter report with the given totals. */
function writeReport(dir, { errors = 0, warnings = 0 } = {}) {
  const path = join(dir, "stylelint-report.json");
  const items = [
    ...Array.from({ length: errors }, () => ({ severity: "error" })),
    ...Array.from({ length: warnings }, () => ({ severity: "warning" })),
  ];
  const results = [
    {
      source: join(dir, "fixture.scss"),
      warnings: items,
      errored: errors > 0,
    },
  ];
  writeFileSync(path, JSON.stringify(results));
  return path;
}

function withTempDir(fn) {
  const dir = mkdtempSync(join(tmpdir(), "stylelintgate-"));
  try {
    return fn(dir);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
}

/**
 * Runs `fn` with the real stylelint-baseline.json swapped for `baseline`,
 * restoring the original afterwards.
 */
function withBaseline(baseline, fn) {
  const backup = readFileSync(baselinePath, "utf8");
  try {
    writeFileSync(baselinePath, `${JSON.stringify(baseline, null, 2)}\n`);
    return fn();
  } finally {
    writeFileSync(baselinePath, backup);
  }
}

// passes when warnings are at the baseline
withBaseline({ warnings: 10 }, () => {
  withTempDir((dir) => {
    const report = writeReport(dir, { warnings: 10 });
    const { status, stdout } = run([report]);
    assert.equal(status, 0);
    assert.match(stdout, /Lint baseline gate passed/);
  });
});

// passes when warnings are below the baseline
withBaseline({ warnings: 10 }, () => {
  withTempDir((dir) => {
    const report = writeReport(dir, { warnings: 3 });
    const { status } = run([report]);
    assert.equal(status, 0);
  });
});

// fails and reports expected vs. actual when warnings exceed the baseline
withBaseline({ warnings: 10 }, () => {
  withTempDir((dir) => {
    const report = writeReport(dir, { warnings: 11 });
    const { status, stderr } = run([report]);
    assert.equal(status, 1);
    assert.match(stderr, /baseline exceeded/);
    assert.match(stderr, /expected:\s*<=\s*10/);
    assert.match(stderr, /actual:\s*11/);
  });
});

// fails on any error regardless of the warning count
withBaseline({ warnings: 10 }, () => {
  withTempDir((dir) => {
    const report = writeReport(dir, { errors: 1, warnings: 0 });
    const { status, stderr } = run([report]);
    assert.equal(status, 1);
    assert.match(stderr, /1 stylelint error/);
  });
});

// fails on errors even when warnings are within baseline
withBaseline({ warnings: 10 }, () => {
  withTempDir((dir) => {
    const report = writeReport(dir, { errors: 2, warnings: 5 });
    const { status, stderr } = run([report]);
    assert.equal(status, 1);
    assert.match(stderr, /2 stylelint error/);
  });
});

// --bump lowers the baseline to the measured warning count
withBaseline({ warnings: 10 }, () => {
  withTempDir((dir) => {
    const report = writeReport(dir, { warnings: 6 });
    const { status } = run(["--bump", report]);
    assert.equal(status, 0);
    const written = JSON.parse(readFileSync(baselinePath, "utf8"));
    assert.equal(written.warnings, 6);
  });
});

// --bump never raises a baseline (ratchet-only)
withBaseline({ warnings: 10 }, () => {
  withTempDir((dir) => {
    const report = writeReport(dir, { warnings: 15 });
    const { status, stdout } = run(["--bump", report]);
    assert.equal(status, 0);
    assert.match(stdout, /nothing to bump/);
    const written = JSON.parse(readFileSync(baselinePath, "utf8"));
    assert.equal(written.warnings, 10);
  });
});

// --bump refuses to run when there are errors
withBaseline({ warnings: 10 }, () => {
  withTempDir((dir) => {
    const report = writeReport(dir, { errors: 1, warnings: 2 });
    const { status, stderr } = run(["--bump", report]);
    assert.equal(status, 1);
    assert.match(stderr, /fix errors before bumping/);
    const written = JSON.parse(readFileSync(baselinePath, "utf8"));
    assert.equal(written.warnings, 10);
  });
});

// a malformed (non-numeric) baseline entry fails loudly
withBaseline({ warnings: "ten" }, () => {
  withTempDir((dir) => {
    const report = writeReport(dir, { warnings: 1 });
    const { status, stderr } = run([report]);
    assert.equal(status, 1);
    assert.match(stderr, /missing or invalid/);
  });
});

// exits non-zero when the stylelint report is not an array (malformed shape)
withBaseline({ warnings: 10 }, () => {
  withTempDir((dir) => {
    const path = join(dir, "stylelint-report.json");
    writeFileSync(path, JSON.stringify({ not: "an array" }));
    const { status, stderr } = run([path]);
    assert.equal(status, 1);
    assert.match(stderr, /Unexpected stylelint report shape/);
  });
});

// exits non-zero when the stylelint report is missing
withBaseline({ warnings: 10 }, () => {
  const { status, stderr } = run([
    join(tmpdir(), "does-not-exist-stylelintgate.json"),
  ]);
  assert.equal(status, 1);
  assert.match(stderr, /Could not read stylelint report/);
});

// exits non-zero with usage when arguments are missing
{
  const { status, stderr } = run([]);
  assert.equal(status, 1);
  assert.match(stderr, /Usage:/);
}

console.log("Stylelint baseline ratchet gate behavior is valid.");
