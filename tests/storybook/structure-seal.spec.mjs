import { test, expect } from "@playwright/test";

// ─── Structure / Seal ─────────────────────────────────────────────────────────
// Story: Structure / Seal → Seal
// Template renders .sds-seal with an icon and .sds-seal__content

test.describe("Structure Seal story", () => {
  test("renders the .sds-seal container", async ({ page }) => {
    await page.goto("/iframe.html?id=structure-seal--seal");
    const seal = page.locator(".sds-seal").first();
    await expect(seal).toBeVisible();
  });

  test(".sds-seal__content contains the official website text", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=structure-seal--seal");
    const content = page.locator(".sds-seal__content").first();
    await expect(content).toBeVisible();
    await expect(content).toContainText("Official U.S. Government Website");
  });

  test(".sds-seal__content has a non-zero rendered width", async ({ page }) => {
    await page.goto("/iframe.html?id=structure-seal--seal");
    const content = page.locator(".sds-seal__content").first();
    await expect(content).toBeVisible();

    const width = await content.evaluate(
      (el) => el.getBoundingClientRect().width
    );
    expect(width).toBeGreaterThan(0);
  });

  test(".sds-seal__content text is styled with error-dark color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=structure-seal--seal");
    const content = page.locator(".sds-seal__content").first();
    await expect(content).toBeVisible();

    // seal.scss: color: color("error-dark") = USWDS red-warm-60v = rgb(181, 9, 9)
    await expect(content).toHaveCSS("color", "rgb(181, 9, 9)");
  });

  test("seal icon element is rendered", async ({ page }) => {
    await page.goto("/iframe.html?id=structure-seal--seal");
    // <i class="sds text-ink bi-flag-fill size-2x margin-y-1 text-secondary">
    const icon = page.locator(".sds-seal i.sds").first();
    await expect(icon).toBeVisible();
  });
});
