import { test, expect } from "@playwright/test";

// Covers utility-class !important removals in _utils.scss and _borders.scss.
//
// Files covered:
//   _utils.scss   — .sds-measure-7…10 max-width, .sds-textarea-large .usa-textarea max-width
//   _borders.scss — .border--hairline border:0 and box-shadow
//
// None of these classes have standalone Storybook stories; elements are injected
// via page.evaluate so the compiled stylesheet is available.

// ── sds-measure-* utility classes ─────────────────────────────────────────────

test("utils: .sds-measure-7 applies a max-width constraint (not none)", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-button-standard--default");

  const maxWidth = await page.evaluate(() => {
    const el = document.createElement("div");
    el.className = "sds-measure-7";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    return window.getComputedStyle(el).maxWidth;
  });

  // `.sds-measure-7 { max-width: 96ex }` — confirms rule applied (not "none")
  expect(maxWidth).not.toBe("none");
});

test("utils: .sds-measure-10 applies a wider max-width than .sds-measure-7", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-button-standard--default");

  const widths = await page.evaluate(() => {
    const m7 = document.createElement("div");
    m7.className = "sds-measure-7";
    m7.style.visibility = "hidden";
    const m10 = document.createElement("div");
    m10.className = "sds-measure-10";
    m10.style.visibility = "hidden";
    document.body.appendChild(m7);
    document.body.appendChild(m10);
    return {
      m7: parseFloat(window.getComputedStyle(m7).maxWidth),
      m10: parseFloat(window.getComputedStyle(m10).maxWidth),
    };
  });

  // sds-measure-10 (136ex) must be wider than sds-measure-7 (96ex)
  expect(widths.m10).toBeGreaterThan(widths.m7);
});

// ── sds-textarea-large ────────────────────────────────────────────────────────

test("utils: .sds-textarea-large .usa-textarea has max-width:none (overrides USWDS constraint)", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-button-standard--default");

  const maxWidth = await page.evaluate(() => {
    const wrapper = document.createElement("div");
    wrapper.className = "sds-textarea-large";
    wrapper.style.visibility = "hidden";
    const textarea = document.createElement("textarea");
    textarea.className = "usa-textarea";
    wrapper.appendChild(textarea);
    document.body.appendChild(wrapper);
    return window.getComputedStyle(textarea).maxWidth;
  });

  // `.sds-textarea-large .usa-textarea { max-width: none }` — overrides USWDS max-width
  expect(maxWidth).toBe("none");
});

// ── border--hairline ──────────────────────────────────────────────────────────

test("borders: .border--hairline has zero border-width (border reset)", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-button-standard--default");

  const borderWidth = await page.evaluate(() => {
    const el = document.createElement("div");
    el.className = "border--hairline";
    el.style.visibility = "hidden";
    // Seed a competing inline border so a passing assertion proves the
    // `.border--hairline` reset actually wins the cascade (a plain <div>
    // already has border-width:0, which would make this test pass even if
    // the rule were deleted).
    el.style.border = "4px solid red";
    document.body.appendChild(el);
    return window.getComputedStyle(el).borderWidth;
  });

  // `.border--hairline { border: 0 !important }` must override the inline
  // 4px border seeded above and reset border-width back to 0.
  expect(borderWidth).toBe("0px");
});

test("borders: .border--hairline has a box-shadow hairline (simulated 1px border)", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-button-standard--default");

  const boxShadow = await page.evaluate(() => {
    const el = document.createElement("div");
    el.className = "border--hairline";
    el.style.visibility = "hidden";
    document.body.appendChild(el);
    return window.getComputedStyle(el).boxShadow;
  });

  // `.border--hairline { box-shadow: 0 0 0 1px color("base-light") }`
  // base-light = gray-20 = #c9c9c9 = rgb(201, 201, 201)
  // Confirms the hairline simulation rule is intact
  expect(boxShadow).toContain("rgb(201, 201, 201)");
});
