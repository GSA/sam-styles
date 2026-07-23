import { test, expect } from "@playwright/test";

// Covers accordion.scss changes — `border: none` on border-0 variant and
// `content: none` on the SDS custom chevron ::before pseudo-element.
//
// Story: Components/Accordion — Multiselectable  (usa-accordion--bordered, no filters wrapper)

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

  // Multiple expanded buttons in the multiselectable template — use .first()
  const expanded = page
    .locator('.usa-accordion__button[aria-expanded="true"]')
    .first();
  await expect(expanded).toBeVisible();

  // .usa-accordion__button[aria-expanded="true"]:before { content: none }
  const content = await expanded.evaluate((el) =>
    window.getComputedStyle(el, "::before").getPropertyValue("content")
  );
  expect(content === "none" || content === "").toBeTruthy();
});

// ── border-0 variant ──────────────────────────────────────────────────────────

test("accordion: border-0 variant button has no border", async ({ page }) => {
  await page.goto("/iframe.html?id=components-accordion--multiselectable");

  // Wait for the accordion to be in the DOM before injecting the border-0 class
  const accordion = page.locator(".usa-accordion").first();
  await expect(accordion).toBeVisible();

  // Inject border-0 modifier and measure the compiled rule on the SECOND button
  // (the first button is inside .usa-accordion__heading:first-of-type which applies
  // its own border-top via a separate rule, masking the border:none assertion).
  const borderValue = await accordion.evaluate((el) => {
    el.classList.add("border-0");
    const buttons = el.querySelectorAll(".usa-accordion__button");
    const second = buttons[1] || buttons[0]; // second button has no first-of-type override
    return window.getComputedStyle(second).getPropertyValue("border-width");
  });

  // .usa-accordion.border-0 .usa-accordion__button { border: none }
  // border-width should be "0px" (shorthand border:none resolves to 0px)
  expect(borderValue).toBe("0px");
});
