// scripts/compile-check.js
// Cross-platform SCSS compilation smoke-check.
// Runs: sass sam-styles/index.scss --no-source-map [load paths] > /dev/null
// Writes coverage/compilation-report.txt and exits 0 on success.

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const loadPaths = [
  ".",
  "sam-styles/packages",
  "node_modules/@uswds/uswds/packages",
  "node_modules/@uswds",
]
  .map((p) => `--load-path=${p}`)
  .join(" ");

try {
  execSync(
    `node node_modules/.bin/sass sam-styles/index.scss --no-source-map ${loadPaths}`,
    { stdio: ["ignore", "ignore", "pipe"] }
  );
} catch (err) {
  process.stderr.write(err.stderr ? err.stderr.toString() : String(err));
  process.exit(1);
}

const outDir = path.join(__dirname, "..", "coverage");
fs.mkdirSync(outDir, { recursive: true });
const msg = "SCSS compilation: OK\n";
fs.writeFileSync(path.join(outDir, "compilation-report.txt"), msg);
process.stdout.write(msg);
