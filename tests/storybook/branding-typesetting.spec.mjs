import { test, expect } from "@playwright/test";

// ─── Typography / Typesetting ─────────────────────────────────────────────────
// Story: Branding / Typography / Typesetting → Typesetting
// Template renders a heading/spacing demo inside .example-spacing

test.describe("Branding Typography Typesetting story", () => {
  test("renders the line-length paragraph text", async ({ page }) => {
    await page.goto(
      "/iframe.html?id=branding-typography-typesetting--typesetting"
    );
    const heading = page.locator("h6").first();
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText("Line length");
  });

  test("h1 inside .example-spacing has a non-zero font-size", async ({
    page,
  }) => {
    await page.goto(
      "/iframe.html?id=branding-typography-typesetting--typesetting"
    );
    const h1 = page.locator(".example-spacing h1").first();
    await expect(h1).toBeVisible();

    const fontSize = await h1.evaluate(
      (el) => getComputedStyle(el).fontSize
    );
    expect(parseFloat(fontSize)).toBeGreaterThan(0);
  });

  test("h1 is larger than h6 (heading scale is applied)", async ({ page }) => {
    await page.goto(
      "/iframe.html?id=branding-typography-typesetting--typesetting"
    );
    const h1 = page.locator(".example-spacing h1").first();
    const h6 = page.locator(".example-spacing h6").first();
    await expect(h1).toBeVisible();
    await expect(h6).toBeVisible();

    const h1Size = await h1.evaluate((el) =>
      parseFloat(getComputedStyle(el).fontSize)
    );
    const h6Size = await h6.evaluate((el) =>
      parseFloat(getComputedStyle(el).fontSize)
    );
    expect(h1Size).toBeGreaterThan(h6Size);
  });

  test(".sds-type--label-title is rendered", async ({ page }) => {
    await page.goto(
      "/iframe.html?id=branding-typography-typesetting--typesetting"
    );
    const label = page.locator(".sds-type--label-title").first();
    await expect(label).toBeVisible();
    await expect(label).toHaveText("Status");
  });
});
