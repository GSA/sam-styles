const { test, expect } = require("@playwright/test");

test("standard button story renders the primary button style", async ({
  page,
}) => {
  await page.goto("/iframe.html?id=components-button-standard--default");

  const button = page.getByRole("button", { name: "Default" });
  await expect(button).toBeVisible();
  await expect(button).toHaveCSS("background-color", "rgb(112, 225, 123)");
});
