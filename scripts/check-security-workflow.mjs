import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const testWorkflow = readFileSync(".github/workflows/test.yml", "utf8");
const workflow = readFileSync(".github/workflows/security.yml", "utf8");
const gate = readFileSync("scripts/check-zap-results.mjs", "utf8");
const baseline = JSON.parse(readFileSync(".zap/baseline.json", "utf8"));
const docs = readFileSync("docs/security-scanning.md", "utf8");
const dependabot = readFileSync(".github/dependabot.yml", "utf8");

assert.match(
  testWorkflow,
  /npm run test:security-workflow/,
  "CI must validate the security workflow contract"
);
assert.match(
  workflow,
  /pull_request:/,
  "security scans must run for pull requests"
);
assert.match(
  workflow,
  /push:[\s\S]*branches:\s*\[master\]/,
  "security scans must run on master"
);
assert.doesNotMatch(
  workflow,
  /github\/codeql-action/,
  "CodeQL runs via GitHub default setup; a committed CodeQL job conflicts with it and fails at startup"
);
assert.match(
  workflow,
  /npm run build:storybook/,
  "DAST must scan the built Storybook"
);
assert.match(
  workflow,
  /zaproxy\/action-baseline@[^\s]+/,
  "OWASP ZAP must scan the runtime surface"
);
assert.match(
  workflow,
  /cmd_options:\s*-I -j/,
  "ZAP must use its JavaScript-capable spider to discover Storybook routes"
);
assert.match(
  workflow,
  /node scripts\/check-zap-results\.mjs report_json\.json/,
  "ZAP findings must pass through the severity gate"
);
assert.match(gate, /riskcode/, "the DAST gate must evaluate alert severity");
assert.match(gate, />=\s*2/, "medium and high DAST findings must be gated");
assert.ok(
  Array.isArray(baseline.acceptedFindings),
  "the existing-findings baseline must be explicit"
);
assert.match(
  docs,
  /Require these status checks[\s\S]*Analyze \(javascript-typescript\)[\s\S]*Analyze \(actions\)[\s\S]*DAST \(medium\/high gate\)/,
  "required status checks must be documented for repository administrators"
);
assert.match(
  docs,
  /block \*\*high\*\* and \*\*medium\*\* alerts introduced by a pull request/,
  "CodeQL new-code severity protection must be documented"
);
assert.match(
  docs,
  /default setup/,
  "docs must explain that CodeQL runs via GitHub default setup, not a committed workflow"
);
assert.match(
  docs,
  /baselined with (documented )?rationale/,
  "pre-existing finding triage must be documented"
);
assert.match(
  dependabot,
  /package-ecosystem:\s*"npm"/,
  "security scanning must preserve npm Dependabot updates"
);
assert.match(
  dependabot,
  /package-ecosystem:\s*"github-actions"/,
  "security scanning must preserve Actions Dependabot updates"
);

console.log("Security workflow contract is valid.");
