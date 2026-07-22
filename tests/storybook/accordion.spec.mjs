import { test, expect } from "@playwright/test";

// Covers accordion.scss changes — `border: none` on border-0 variant and
// `content: none` on the SDS custom chevron ::before pseudo-element.
//
// Stories:
//   Components/Accordion — Multiselectable  (usa-accordion--bordered, no filters wrapper)
//   Components/Accordion — Bordered          (injected border-0 class via page.evaluate)

// ── Custom chevron — ::before content:none ────────────────────────────────────

test("accordion: SDS custom button has no ::before content (USWDS expand icon suppressed)", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-accordion--multiselectable");

  const button = page.locator(".usa-accordion__button").first();
  await expect(button).toBeVisible();

  // .usa-accordion:not(.sds-accordion--filters) .usa-accordion__button::before { content: none }
  // Fails if the content:none rule is removed, allowing USWDS to render its default expand icon
  const content = await button.evaluate((el) =>
    window.getComputedStyle(el, "::before").getPropertyValue("content")
  );
  // "none" or "" both represent no generated content
  expect(content === "none" || content === "").toBeTruthy();
});

test("accordion: SDS custom button [aria-expanded=true] has no ::before content", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-accordion--multiselectable");

  // The multiselectable template has the first button aria-expanded="true"
  const expanded = page.locator('.usa-accordion__button[aria-expanded="true"]');
  await expect(expanded).toBeVisible();

  // .usa-accordion__button[aria-expanded="true"]:before { content: none }
  const content = await expanded.evaluate((el) =>
    window.getComputedStyle(el, "::before").getPropertyValue("content")
  );
  expect(content === "none" || content === "").toBeTruthy();
});

// ── border-0 variant ──────────────────────────────────────────────────────────

test("accordion: border-0 variant button has no border", async ({ page }) => {
  await page.goto("/iframe.html?id=components-accordion--bordered");

  // Inject border-0 modifier on the accordion so we can assert the compiled rule
  const borderValue = await page.evaluate(() => {
    const accordion = document.querySelector(".usa-accordion");
    accordion.classList.add("border-0");
    const button = accordion.querySelector(".usa-accordion__button");
    return window.getComputedStyle(button).getPropertyValue("border-width");
  });

  // .usa-accordion.border-0 .usa-accordion__button { border: none }
  // border-width should be "0px" (shorthand border:none resolves to 0px)
  expect(borderValue).toBe("0px");
});
