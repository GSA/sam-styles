import { readFileSync } from "node:fs";

const workflow = readFileSync(".github/workflows/publish.yml", "utf8");
const runbook = readFileSync("docs/npm-publish-runbook.md", "utf8");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function stepNamed(name) {
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = workflow.match(
    new RegExp(`- name: ${escaped}[\\s\\S]*?(?=\\n\\s*(?:#\\s*)?- name: |$)`)
  );
  return match?.[0] ?? "";
}

const modeStep = stepNamed("Determine dry-run mode");
const livePublishStep = stepNamed("Publish (live, OIDC Trusted Publishing)");
const dryRunPublishStep = stepNamed("Publish (dry-run)");

assert(modeStep, 'Could not find the "Determine dry-run mode" step.');
assert(livePublishStep, "Could not find the live publish step.");
assert(dryRunPublishStep, "Could not find the dry-run publish step.");

assert(
  /if \[ "\$\{\{ github\.event_name \}\}" = "workflow_dispatch" \]; then/.test(
    modeStep
  ),
  "Determine dry-run mode must branch on workflow_dispatch."
);
assert(
  /if \[ "\$DRY" != "true" \]; then/.test(modeStep) &&
    /::error::workflow_dispatch runs must use dry-run=true\. Publish a GitHub Release to run a live publish\./.test(
      modeStep
    ) &&
    /exit 1/.test(modeStep),
  "workflow_dispatch dry-run=false must fail loudly before publish."
);

assert(
  /if:\s*github\.event_name\s*==\s*(['"])release\1\s*&&\s*steps\.mode\.outputs\[(['"])dry-run\2\]\s*==\s*(['"])false\3/.test(
    livePublishStep
  ),
  "Live publish must explicitly require the release event and dry-run=false."
);
assert(
  /if:\s*steps\.mode\.outputs\[(['"])dry-run\1\]\s*==\s*(['"])true\2/.test(
    dryRunPublishStep
  ),
  "Dry-run publish must still run when dry-run mode is true."
);

assert(
  /quality-gates:\n\s+uses: \.\/\.github\/workflows\/build\.yml/.test(workflow),
  "Existing reusable build quality gate must remain in the publish workflow."
);
for (const expectedStep of [
  "Run tests (stylelint)",
  "SCSS compilation check",
  "Run Storybook smoke tests",
]) {
  assert(
    workflow.includes(`- name: ${expectedStep}`),
    `Existing publish quality gate step is missing: ${expectedStep}`
  );
}

assert(
  /manual (?:dispatch|workflow_dispatch).*rehearsal-only/is.test(
    `${workflow}\n${runbook}`
  ),
  "Workflow comments/runbook must describe manual dispatch as rehearsal-only."
);
assert(
  !/manual dispatch with dry-run=false/is.test(`${workflow}\n${runbook}`),
  "Docs/comments must not imply manual dispatch with dry-run=false can live publish."
);

console.log("Publish workflow hardening checks passed.");
