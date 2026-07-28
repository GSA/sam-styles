import { test, expect } from "@playwright/test";

// ─── Structure / Banner ───────────────────────────────────────────────────────
// Story: Structure / GovtBaner → GovtBaner
// Note: title and story name are intentionally typo'd in the source ("Baner")

test.describe("Structure Banner story", () => {
  test("renders the official website header text", async ({ page }) => {
    await page.goto("/iframe.html?id=structure-govtbaner--govt-baner");
    const headerText = page.locator(".usa-banner__header-text").first();
    await expect(headerText).toBeVisible();
    await expect(headerText).toHaveText(
      "An official website of the United States government"
    );
  });

  test(".usa-banner has a non-transparent background-color", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=structure-govtbaner--govt-baner");
    const banner = page.locator(".usa-banner").first();
    await expect(banner).toBeVisible();

    const bg = await banner.evaluate(
      (el) => getComputedStyle(el).backgroundColor
    );
    expect(bg).not.toBe("rgba(0, 0, 0, 0)");
    expect(bg).not.toBe("transparent");
  });

  test(".usa-banner__button has underline text-decoration (SDS style applied)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=structure-govtbaner--govt-baner");
    // .usa-banner__button { @include u-text("base-dark", underline, baseline) }
    const button = page.locator(".usa-banner__button").first();
    await expect(button).toBeVisible();
    const decoration = await button.evaluate(
      (el) => getComputedStyle(el).textDecorationLine
    );
    expect(decoration).toBe("underline");
  });

  test("banner expanded content shows .gov and https guidance panels", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=structure-govtbaner--govt-baner");
    // aria-expanded="true" in the template means content is open by default
    const guidance = page.locator(".usa-banner__guidance");
    await expect(guidance).toHaveCount(2);
  });
});
