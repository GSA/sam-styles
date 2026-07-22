import { test, expect } from "@playwright/test";

test("standard button story renders the primary button style", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-button-standard--default");

  const button = page.getByRole("button", { name: "Default" });
  await expect(button).toBeVisible();
  // rgb(112, 225, 123) = USWDS token green-cool-20v = $theme-color-primary in sam-styles/packages/theme/settings.scss
  await expect(button).toHaveCSS("background-color", "rgb(112, 225, 123)");
});
