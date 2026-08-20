import { readFileSync } from "node:fs";

const [reportPath = "report_json.json", baselinePath = ".zap/baseline.json"] =
  process.argv.slice(2);

function readJson(path, description) {
  try {
    return JSON.parse(readFileSync(path, "utf8"));
  } catch (error) {
    console.error(`Unable to read ${description} at ${path}: ${error.message}`);
    process.exit(1);
  }
}

function fingerprint(alert) {
  return [alert.pluginid, alert.alertRef, alert.url, alert.param]
    .map((value) => value ?? "")
    .join("|");
}

const report = readJson(reportPath, "ZAP JSON report");
const baseline = readJson(baselinePath, "accepted-findings baseline");
const accepted = new Set(
  baseline.acceptedFindings.map((finding) => finding.fingerprint)
);
const alerts = (report.site ?? []).flatMap((site) => site.alerts ?? []);
const blocking = alerts.filter(
  (alert) => Number(alert.riskcode) >= 2 && !accepted.has(fingerprint(alert))
);

if (blocking.length === 0) {
  console.log("No new medium- or high-severity ZAP findings.");
  process.exit(0);
}

console.error("New medium/high ZAP findings block this change:");
for (const alert of blocking) {
  console.error(
    `- [${alert.riskdesc}] ${alert.alert}: ${alert.url ?? "unknown URL"}`
  );
  console.error(`  fingerprint: ${fingerprint(alert)}`);
}
process.exit(1);
