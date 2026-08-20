import assert from "node:assert/strict";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const directory = mkdtempSync(join(tmpdir(), "zap-gate-"));
const baselinePath = join(directory, "baseline.json");
writeFileSync(baselinePath, JSON.stringify({ acceptedFindings: [] }));

function run(alerts) {
  const reportPath = join(directory, "report.json");
  writeFileSync(reportPath, JSON.stringify({ site: [{ alerts }] }));
  return spawnSync(
    process.execPath,
    ["scripts/check-zap-results.mjs", reportPath, baselinePath],
    {
      encoding: "utf8",
    }
  );
}

assert.equal(
  run([{ riskcode: "1", alert: "low" }]).status,
  0,
  "low findings should not block"
);
assert.equal(
  run([{ riskcode: "2", alert: "medium" }]).status,
  1,
  "medium findings should block"
);
assert.equal(
  run([{ riskcode: "3", alert: "high" }]).status,
  1,
  "high findings should block"
);

const acceptedAlert = {
  riskcode: "2",
  pluginid: "10001",
  alertRef: "10001-1",
  url: "http://127.0.0.1:6006/",
  param: "",
};
writeFileSync(
  baselinePath,
  JSON.stringify({
    acceptedFindings: [
      { fingerprint: "10001|10001-1|http://127.0.0.1:6006/|" },
    ],
  })
);
assert.equal(
  run([acceptedAlert]).status,
  0,
  "accepted pre-existing findings should not block"
);

console.log("ZAP severity gate behavior is valid.");
