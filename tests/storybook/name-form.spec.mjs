import { test, expect } from "@playwright/test";

test.describe("NameForm regression", () => {
  test("first-name input is visible", async ({ page }) => {
    await page.goto("/iframe.html?id=form-elements-nameform--name-form");
    const input = page.locator("#first-name");
    await expect(input).toBeVisible();
  });

  test("usa-input--small is narrower than a full-width usa-input", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-nameform--name-form");
    const smallInput = page.locator(".usa-input--small").first();
    const fullInput = page.locator("#first-name");
    await expect(smallInput).toBeVisible();
    await expect(fullInput).toBeVisible();

    const smallWidth = await smallInput.evaluate((el) =>
      el.getBoundingClientRect().width
    );
    const fullWidth = await fullInput.evaluate((el) =>
      el.getBoundingClientRect().width
    );
    // .usa-input--small constrains the field width (used for short inputs like "Title")
    expect(smallWidth).toBeLessThan(fullWidth);
  });

  test("usa-fieldset has no visible border (fieldset reset)", async ({
    page,
  }) => {
    await page.goto("/iframe.html?id=form-elements-nameform--name-form");
    const fieldset = page.locator(".usa-fieldset").first();
    await expect(fieldset).toBeVisible();
    // USWDS resets fieldset border to none
    await expect(fieldset).toHaveCSS("border-top-style", "none");
    await expect(fieldset).toHaveCSS("border-right-style", "none");
    await expect(fieldset).toHaveCSS("border-bottom-style", "none");
    await expect(fieldset).toHaveCSS("border-left-style", "none");
  });

  test("required inputs have aria-required attribute", async ({ page }) => {
    await page.goto("/iframe.html?id=form-elements-nameform--name-form");
    const firstNameInput = page.locator("#first-name");
    const lastNameInput = page.locator("#last-name");
    await expect(firstNameInput).toHaveAttribute("aria-required", "true");
    await expect(lastNameInput).toHaveAttribute("aria-required", "true");
  });
});
