# Storybook accessibility testing

## Enforcement decision

SAM Styles enforces WCAG 2.1 Level A and AA with axe-core in Playwright rather than `@storybook/addon-a11y`. This makes accessibility an automated CI gate and reuses the existing rendered Storybook, Playwright, and Chromium harness. The addon can still be considered separately for interactive authoring feedback, but it is not needed to enforce CI.

Run the gate locally with:

```sh
npm run test:a11y
```

The test discovers every story from Storybook's generated `index.json`, loads each rendered iframe, and runs axe rules tagged `wcag2a`, `wcag2aa`, `wcag21a`, or `wcag21aa`.

## New-code posture

The initial scan found 157 violation instances across 54 stories. These are recorded in `tests/accessibility/wcag-2.1-aa-baseline.json`. CI compares the current scan with that baseline:

- a new story or changed story that adds a violation fails the gate;
- a known baseline violation is reported by the checked-in inventory but does not block rollout;
- when a violation is fixed, the gate asks the contributor to remove its stale baseline entry.

Do not update the baseline to accept new violations. `UPDATE_A11Y_BASELINE=1 npm run test:a11y` exists only to regenerate the inventory after intentional remediation and review.

### Initial triage

| axe rule                                                                                                        | Instances | Remediation theme                                                   |
| --------------------------------------------------------------------------------------------------------------- | --------: | ------------------------------------------------------------------- |
| `button-name`                                                                                                   |        77 | Add accessible names to icon-only example buttons.                  |
| `color-contrast`                                                                                                |        33 | Correct component/state foreground and background tokens.           |
| `aria-allowed-attr`                                                                                             |        13 | Remove or relocate ARIA attributes unsupported by the element/role. |
| `aria-valid-attr`                                                                                               |        10 | Correct misspelled or invalid ARIA attributes in story markup.      |
| `label`                                                                                                         |         5 | Associate controls with visible labels or accessible names.         |
| `link-in-text-block`                                                                                            |         4 | Make links distinguishable without relying on color alone.          |
| `aria-conditional-attr`                                                                                         |         4 | Use ARIA attributes only with roles that permit them.               |
| `aria-required-attr`                                                                                            |         4 | Add attributes required by the declared roles.                      |
| `list`                                                                                                          |         2 | Ensure list children have valid list semantics.                     |
| Other (`aria-input-field-name`, `scrollable-region-focusable`, `aria-roles`, `nested-interactive`, `image-alt`) |         5 | Triage and fix the affected story markup individually.              |

The baseline contains story IDs and selectors for assigning remediation work without losing detail.

## Required GitHub check

The gate runs in the existing **Test / test** pull-request job. A repository administrator must ensure that this job is selected as a required status check in the `master` branch protection rules; workflow code cannot configure branch protection itself.
